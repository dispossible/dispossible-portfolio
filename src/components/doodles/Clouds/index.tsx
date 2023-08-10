import throttle from "@/lib/throttle";
import { useEffect, useRef } from "react";
import style from "./clouds.module.css";

export default function Clouds() {
    const svg = useRef<SVGSVGElement>(null);

    useEffect(() => {
        function resize() {
            const el = svg.current;
            if (!el) {
                return;
            }
            const parent = el.parentElement;
            if (!parent) {
                return;
            }

            const box = parent.getBoundingClientRect();
            const ratio = box.width / box.height;
            const height = el.getAttribute("viewBox")!.split(" ")[3];
            let width = parseInt(height, 10) * ratio;

            if (isNaN(width)) return;
            if (width < 300) {
                width = 300;
            }

            el.setAttribute("viewBox", `0 0 ${width} ${height}`);
            el.querySelectorAll("rect").forEach((rect) => {
                rect.setAttribute("width", `${width * 2 + 200}`);
                rect.setAttribute("x", `${width * -0.5 + 50}`);
            });
        }

        const throttleResize = throttle(resize, 500);
        throttleResize();
        window.addEventListener("resize", throttleResize);
        return () => window.removeEventListener("resize", throttleResize);
    }, [svg]);

    return (
        <div className={style.root}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 200" preserveAspectRatio="none" ref={svg}>
                <defs>
                    <filter id="clouds" colorInterpolationFilters="sRGB">
                        <feTurbulence result="turb1" numOctaves="8" baseFrequency="0.02" type="fractalNoise" seed="2" />
                        <feMorphology in="turb1" result="morphTurb" operator="dilate" radius="5.2" />
                        <feComposite in="SourceGraphic" in2="morphTurb" operator="in" />
                    </filter>

                    <filter id="distort" colorInterpolationFilters="sRGB">
                        <feTurbulence result="turb" type="fractalNoise" baseFrequency="0.01" numOctaves="10" />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="turb"
                            xChannelSelector="R"
                            yChannelSelector="G"
                            scale="150"
                        />
                    </filter>

                    <linearGradient id="gradientMask" x1="0" x2="0" y1="0" y2="1">
                        <stop stopColor="#fff" stopOpacity="0" id="stop882" offset="0.3" />
                        <stop stopColor="#fff" stopOpacity="1" id="stop884" offset="0.5" />
                    </linearGradient>

                    <linearGradient id="gradientFill" x1="0" x2="0" y1="0" y2="1">
                        <stop stopColor="#fff" stopOpacity="0" id="stop882" offset="0.4" />
                        <stop stopColor="#fff" stopOpacity="1" id="stop884" offset="0.7" />
                    </linearGradient>

                    <mask id="mask" maskUnits="userSpaceOnUse">
                        <rect fill="url(#gradientMask)" width="700" height="400" x="-100" y="-100" />
                    </mask>
                </defs>

                <rect y="0" x="0" height="200" width="700" fill="#6af" />
                <g filter="url(#distort)">
                    <rect y="-100" x="-100" height="400" width="700" fill="url(#gradientFill)" />
                    <rect
                        y="-100"
                        x="-100"
                        height="400"
                        width="700"
                        id="rect815"
                        fill="#fff"
                        filter="url(#clouds)"
                        mask="url(#mask)"
                    />
                </g>
                <rect y="100" x="0" height="100" width="500" fill="url(#gradientFill)" />
            </svg>
        </div>
    );
}
