import clsx from "clsx";
import Link from "next/link";
import { CSSProperties, MouseEventHandler, useCallback, useRef, useState } from "react";

import useAnimationFrame from "@/lib/useAnimationFrame";
import { StaticImageData } from "next/image";
import style from "./thumbnail.module.css";

interface ThumbnailProps {
    className?: string;
    imageUrl?: string;
    image?: StaticImageData;
    title: string;
    href: string;
}

export default function Thumbnail({ className, href, image, imageUrl, title }: ThumbnailProps) {
    const [currentPos, setCurrentPos] = useState({ x: 0.5, y: 0.5 });

    const $thumb = useRef<HTMLDivElement>(null);

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

    useAnimationFrame((delta) => {
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
    });

    return (
        <div
            className={clsx(className, style.root)}
            style={
                {
                    "--thumb": `url("${image?.src ?? imageUrl}")`,
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
