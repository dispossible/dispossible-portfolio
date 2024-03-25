import clsx from "clsx";
import Link from "next/link";
import { CSSProperties, MouseEventHandler, useCallback, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

import useAnimationFrame from "@/lib/useAnimationFrame";
import { StaticImageData } from "next/image";
import style from "./thumbnail.module.css";

interface ThumbnailProps {
    className?: string;
    image: StaticImageData;
    imageDepth: StaticImageData;
    foreground?: StaticImageData;
    title: string;
    href: string;
}

export default function Thumbnail({ className, href, image, imageDepth, title, foreground }: ThumbnailProps) {
    const [isClient, setClient] = useState(false);
    useEffect(() => {
        setClient(true);
    }, []);

    const [currentPos, setCurrentPos] = useState({ x: 0.5, y: 0.5 });

    const $thumb = useRef<HTMLDivElement>(null);

    const renderer = useMemo(() => {
        if (!isClient) {
            return null;
        }
        const renderer = new THREE.WebGLRenderer();
        renderer.setClearAlpha(0);
        return renderer;
    }, [isClient]);
    const camera = useMemo(() => new THREE.OrthographicCamera(-1, 1, 1, -1, -100000, 100000), []);
    const scene = useMemo(() => new THREE.Scene(), []);

    useEffect(() => {
        const to = setTimeout(
            () =>
                requestIdleCallback(async () => {
                    const meshScaler = 2;
                    const depthMultiplier = 0.8;

                    const [imageEl, imageDepthEl] = await Promise.all([
                        loadImage(image?.src),
                        loadImage(imageDepth?.src),
                    ]);

                    const imgAspectRatio = imageEl.width / imageEl.height;
                    const elAspectRatio = (renderer?.domElement?.width ?? 1) / (renderer?.domElement?.height ?? 1);
                    const aspectRatio = imgAspectRatio - elAspectRatio;

                    const geometrySize = 2.4; // 2 is the canvas size

                    const width = Math.round(imageDepthEl.width / meshScaler);
                    const height = Math.round(imageDepthEl.height / meshScaler);

                    const imageDepthData = imageToData(imageDepthEl);

                    const geometryWidth = aspectRatio > 0 ? geometrySize * (1 + aspectRatio) : geometrySize;
                    const geometryHeight = aspectRatio < 0 ? geometrySize * (1 - aspectRatio) : geometrySize;

                    const planeGeometry = new THREE.PlaneGeometry(geometryWidth, geometryHeight, width, height);

                    const vertexes = planeGeometry.getAttribute("position");
                    const vertex = new THREE.Vector3();

                    for (let i = 0; i < vertexes.count; i++) {
                        vertex.fromBufferAttribute(vertexes, i);

                        // vertexes are placed -geometrySize -> geometrySize in X and Y
                        const x = (vertex.x + geometryWidth / 2) / geometryWidth; // Normalized 0-1
                        const y = (vertex.y + geometryHeight / 2) / geometryHeight; // Normalized 0-1
                        const invY = 1 - y; // THREE works from the bottom left, not top left like an image
                        const pixelX = Math.round(imageDepthData.width * x) - 1;
                        const pixelY = Math.round(imageDepthData.height * invY) - 1;
                        const dataPosition = pixelY * imageDepthData.width * 4 + pixelX * 4;

                        const depth = 1 - imageDepthData.data[dataPosition] / 255;

                        vertexes.setZ(i, vertex.z - depth * depthMultiplier);
                    }

                    planeGeometry.computeVertexNormals();

                    const texture = new THREE.Texture(imageEl);
                    texture.colorSpace = THREE.SRGBColorSpace;
                    texture.needsUpdate = true;
                    const mesh = new THREE.Mesh(
                        planeGeometry,
                        new THREE.MeshBasicMaterial({ map: texture, wireframe: false })
                    );
                    scene.add(mesh);

                    // const debugGeometry = new THREE.PlaneGeometry(geometrySize, geometrySize, 5, 5);
                    // const debugMesh = new THREE.Mesh(
                    //     debugGeometry,
                    //     new THREE.MeshBasicMaterial({ wireframe: true, color: 0xff0000, opacity: 0.1 })
                    // );
                    // scene.add(debugMesh);

                    renderer?.domElement?.classList?.add(style.canvasVisible);
                }),
            1500
        );
        return () => clearTimeout(to);
    }, [image, imageDepth, scene, renderer]);

    const render = useCallback(() => {
        if (renderer) {
            const multiplier = 0.3;

            let x = currentPos.x;
            let y = currentPos.y;
            x -= 0.5;
            y -= 0.5;
            x *= multiplier;
            y *= multiplier;

            const aspectRatio = renderer.domElement.width / renderer.domElement.height;

            camera.rotation.x = y * -1 * aspectRatio;
            camera.rotation.y = x * -1;

            renderer.render(scene, camera);
        }
    }, [renderer, scene, camera, currentPos]);
    useAnimationFrame(render);

    useEffect(() => {
        const thumb = $thumb.current;
        if (!thumb || !renderer) {
            return;
        }

        renderer.domElement.classList.add(style.canvas);
        thumb.children[0].prepend(renderer.domElement);

        const onResize = () => {
            const rect = thumb.getBoundingClientRect();

            renderer.setSize(rect.width, rect.height);
            renderer.setPixelRatio(window.devicePixelRatio);
        };
        window.addEventListener("resize", onResize);
        onResize();

        return () => {
            window.removeEventListener("resize", onResize);
            thumb.children[0].removeChild(renderer.domElement);
        };
    }, [renderer]);

    const targetPos = useRef({ x: 0.5, y: 0.5 });
    const speed = 5; // Bigger == Slower

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
        if ($thumb.current) {
            const xPx = e.pageX - $thumb.current.offsetLeft;
            const yPx = e.pageY - $thumb.current.offsetTop;

            const x = xPx / $thumb.current.clientWidth;
            const y = yPx / $thumb.current.clientHeight;

            targetPos.current = {
                x,
                y,
            };
        }
    }, []);
    const handleMouseOut = useCallback(() => {
        targetPos.current = {
            x: 0.5,
            y: 0.5,
        };
    }, []);

    const updatePosition = useCallback((delta: number) => {
        setCurrentPos(({ x, y }) => {
            if (delta < 1) {
                return { x, y };
            }

            const distanceX = targetPos.current.x - x;
            const distanceY = targetPos.current.y - y;

            if (Math.abs(distanceX) < 0.0001) {
                x = targetPos.current.x;
            } else {
                x += distanceX / (delta * speed);
            }
            if (Math.abs(distanceY) < 0.0001) {
                y = targetPos.current.y;
            } else {
                y += distanceY / (delta * speed);
            }

            return {
                x,
                y,
            };
        });
    }, []);
    useAnimationFrame(updatePosition);

    return (
        <div
            className={clsx(className, style.root)}
            style={
                {
                    "--thumb": `url("${image.src}")`,
                    "--foreground": foreground ? `url("${foreground.src}")` : undefined,
                    "--x": currentPos.x,
                    "--y": currentPos.y,
                } as CSSProperties
            }
            onMouseMove={handleMouseMove}
            onMouseOut={handleMouseOut}
            ref={$thumb}
        >
            <Link href={href} className={style.thumbnail}>
                <h3 className={style.title}>{title}</h3>
            </Link>
        </div>
    );
}

async function loadImage(url: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            resolve(img);
        };
        img.onerror = reject;
        img.src = url;
    });
}

function imageToData(img: HTMLImageElement) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw new Error("Failed to init canvas context");
    }
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
    return ctx.getImageData(0, 0, canvas.width, canvas.height);
}
