import { range } from "@/lib/range";
import { SVGProps, useEffect, useState } from "react";
import style from "./banner.module.css";

const TAU = Math.PI * 2;

interface BannerProps {}

export default function Banner(props: BannerProps) {
    return (
        <header className={style.banner}>
            <div className={style.text}>
                <h1 className={style.title}>Dispossible</h1>
                <small className={style.subTitle}>Timothy Bailey</small>
            </div>
            <div className={style.squareWrap}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className={style.square}
                    viewBox="0 0 100 100"
                >
                    <defs>
                        <filter id="banner-glow">
                            <feMorphology in="SourceGraphic" result="border1" operator="dilate" radius="0.1" />
                            <feGaussianBlur in="border1" result="glow1" stdDeviation="0.6" />

                            <feMorphology in="SourceGraphic" result="border2" operator="dilate" radius="0.02" />
                            <feGaussianBlur in="border2" result="glow2" stdDeviation="0.2" />

                            <feBlend in="glow1" in2="glow2" result="glow" mode="screen" />
                            <feColorMatrix
                                in="glow"
                                result="glowFade"
                                type="matrix"
                                values="0.8 0 0 0 0
                                        0 1 0 0 0
                                        0 0 0.8 0 0
                                        0 0 0 0.6 0"
                            />

                            <feBlend in="SourceGraphic" in2="glowFade" result="s2" mode="screen" />

                            <feColorMatrix
                                in="s2"
                                result="s2R"
                                type="matrix"
                                values="1 0 0 0 0
                                        0 0 0 0 0
                                        0 0 0 0 0
                                        0 0 0 1 0"
                            />
                            <feColorMatrix
                                in="s2"
                                result="s2G"
                                type="matrix"
                                values="0 0 0 0 0
                                        0 1 0 0 0
                                        0 0 0 0 0
                                        0 0 0 1 0"
                            />
                            <feColorMatrix
                                in="s2"
                                result="s2B"
                                type="matrix"
                                values="0 0 0 0 0
                                        0 0 0 0 0
                                        0 1 0 0 0
                                        0 0 0 1 0"
                            />

                            <feOffset in="s2R" result="s3R" dx="0.2" dy="0" />
                            <feOffset in="s2G" result="s3G" dx="-0.2" dy="0.1" />
                            <feOffset in="s2B" result="s3B" dx="0" dy="-0.2" />

                            <feBlend in="s3R" in2="s3G" result="s3RG" mode="screen" />
                            <feBlend in="s3RG" in2="s3B" result="s3RGB" mode="screen" />
                        </filter>
                        <filter id="banner-reflect">
                            <feTurbulence
                                type="fractalNoise"
                                baseFrequency="0.05 0.4"
                                numOctaves="4"
                                result="turbulence"
                                seed="5"
                            >
                                <animate
                                    attributeName="baseFrequency"
                                    values="0.05 0.4; 0.02 0.35; 0.05 0.4"
                                    dur="60s"
                                    begin="-10s"
                                    repeatCount="indefinite"
                                    calcMode="spline"
                                    keyTimes="0; 0.5; 1"
                                    keySplines="0.5 0 0.5 1 ; 0.5 0 0.5 1"
                                />
                            </feTurbulence>
                            <feColorMatrix in="turbulence" result="turbulenceSpin" type="hueRotate" values="90">
                                <animate attributeName="values" values="0;180;360" dur="10s" repeatCount="indefinite" />
                            </feColorMatrix>
                            <feDisplacementMap
                                in2="turbulenceSpin"
                                in="SourceGraphic"
                                result="water"
                                scale="6"
                                xChannelSelector="R"
                                yChannelSelector="G"
                            />
                            <feGaussianBlur in="water" result="waterBlur" stdDeviation="0.1" />
                            <feColorMatrix
                                type="matrix"
                                in="waterBlur"
                                values="1 0   0 0   0
                                        0 1.1 0 0   0
                                        0 0   1 0   0
                                        0 0   0 0.7 0"
                            />
                        </filter>
                        <clipPath id="waterClip">
                            <rect x="0" y="74" width="100" height="27" />
                        </clipPath>
                    </defs>
                    <g strokeWidth={0.1} stroke="white" fill="none">
                        <g filter="url(#banner-glow)">
                            <path id="banner-w1" d="M 49.5 75 a 20 2.8 0 1 0 1 0 Z" className={style.bob} />
                            <path id="banner-w2" d="M 49.5 76.2 a 15 2 0 1 0 1 0 Z" />
                            <DashArray
                                count={24}
                                start={15}
                                end={18}
                                speed={2}
                                id="banner-w3"
                                style={{
                                    transform: "translateY(29%)",
                                    transformOrigin: "center center",
                                }}
                            />
                            <path
                                id="banner-w4"
                                d="M 49.5 73.1 a 13 2 0 1 0 1 0 Z"
                                className={style.bob}
                                style={{ animationDelay: "-8s" }}
                                strokeDasharray={Math.PI * 13}
                            >
                                <animate
                                    attributeName="stroke-dashoffset"
                                    values={[0, Math.PI * -13, Math.PI * -13 * 2].join(";")}
                                    dur="11s"
                                    repeatCount="indefinite"
                                />
                            </path>
                            <DashArray
                                count={6}
                                start={10}
                                end={12}
                                endOffset={3}
                                id="banner-w5"
                                speed={0.8}
                                reverse
                                style={{
                                    transform: "translateY(27%)",
                                    transformOrigin: "center center",
                                }}
                            />
                            <path id="banner-w6" d="M 49.5 77.5 a 9 1.4 0 1 1 1 0 Z" strokeDasharray={Math.PI * 9}>
                                <animate
                                    attributeName="stroke-dashoffset"
                                    values={[0, Math.PI * 9, Math.PI * 9 * 2].join(";")}
                                    dur="14s"
                                    startOffset="-5s"
                                    repeatCount="indefinite"
                                />
                            </path>
                        </g>
                        <g clipPath="url(#waterClip)">
                            <g filter="url(#banner-glow) url(#banner-reflect)">
                                <use
                                    href="#banner-w1"
                                    style={{
                                        transform: "translateY(8%)",
                                        transformOrigin: "center center",
                                    }}
                                />
                                <use
                                    href="#banner-w2"
                                    style={{
                                        transform: "translateY(8%)",
                                        transformOrigin: "center center",
                                    }}
                                />
                                <use
                                    href="#banner-w3"
                                    style={{
                                        transform: "translateY(7%)",
                                        transformOrigin: "center center",
                                    }}
                                />
                                <use
                                    href="#banner-w4"
                                    style={{
                                        transform: "translateY(14%)",
                                        transformOrigin: "center center",
                                    }}
                                />
                                <use
                                    href="#banner-w5"
                                    style={{
                                        transform: "translateY(8%)",
                                        transformOrigin: "center center",
                                    }}
                                />
                                <use
                                    href="#banner-w6"
                                    style={{
                                        transform: "translateY(12%)",
                                        transformOrigin: "center center",
                                    }}
                                />
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </header>
    );
}

interface DashArrayProps extends SVGProps<SVGPathElement> {
    count: number;
    start: number;
    end: number;
    speed?: number;
    reverse?: boolean;
    endOffset?: number;
}

function DashArray({ count, start, end, speed = 1, reverse = false, endOffset = 0, ...props }: DashArrayProps) {
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        let lastFrameTime = Date.now();
        const updateOffset = () => {
            if (lastFrameTime >= 0) {
                const delta = Date.now() - lastFrameTime;
                setOffset((o) => o + delta);
                lastFrameTime = Date.now();
                requestAnimationFrame(updateOffset);
            }
        };
        requestAnimationFrame(updateOffset);
        return () => {
            lastFrameTime = -999;
        };
    }, []);

    if (reverse) {
        speed *= -1;
    }

    const dashArray = range(count)
        .map((i) => {
            const startY = start * 0.15;
            const endY = end * 0.15;
            let rad = i * (TAU / count);
            rad += offset / (10000 * speed);
            const x = Math.sin(rad) * start + 50;
            const y = Math.cos(rad) * startY + 50;
            const x2 = Math.sin(rad) * end + 50;
            const y2 = Math.cos(rad) * endY + 50 + endOffset;
            return `M${x} ${y} L${x2} ${y2}`;
        })
        .join("");

    return <path d={dashArray} {...props} />;
}
