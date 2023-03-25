import { range } from "@/lib/range";
import { useAnimationFrame } from "@/lib/useAnimationFrame";
import { SVGProps, useState } from "react";
import style from "./banner.module.css";

const TAU = Math.PI * 2;
const FPS_30 = 1000 / 30;
const FPS_5 = 1000 / 5;
const FPS_1 = 1000 / 1;

interface BannerProps {}

export default function Banner(props: BannerProps) {
    const [stopAnimationFog, setStopAnimationFog] = useState(false);
    const [stopAnimationRipple, setStopAnimationRipple] = useState(false);
    const [stopAnimationMotion, setStopAnimationMotion] = useState(false);
    const [stopAnimationWater, setStopAnimationWater] = useState(false);

    useAnimationFrame(
        (delta, { frameTimes, stopOne, stopTwo, stopThree, stopFour }) => {
            frameTimes.push(delta);
            const avgDelta = frameTimes.reduce((sum, time) => sum + time, 0) / frameTimes.length;

            //Detect poor FPS quickly and shut most of it down
            if ((frameTimes.length > 0 && avgDelta > FPS_1) || (frameTimes.length > 1 && avgDelta > FPS_5)) {
                setStopAnimationFog(true);
                setStopAnimationRipple(true);
                setStopAnimationMotion(true);
                stopOne = true;
                stopTwo = true;
                stopThree = true;
            }

            // After 10 frames take a view on if we are getting 30fps
            if (frameTimes.length > 5 && avgDelta > FPS_30) {
                // Shut off animation layers in stages to increase fps
                if (!stopOne) {
                    setStopAnimationFog(true);
                    frameTimes = [];
                    stopOne = true;
                } else if (!stopTwo) {
                    setStopAnimationRipple(true);
                    frameTimes = [];
                    stopTwo = true;
                } else if (!stopThree) {
                    setStopAnimationMotion(true);
                    frameTimes = [];
                    stopThree = true;
                } else {
                    setStopAnimationWater(true);
                    frameTimes = [];
                    stopFour = true;
                }
            }

            return { frameTimes, stopOne, stopTwo, stopThree, stopFour };
        },
        undefined,
        {
            frameTimes: [] as number[],
            stopOne: false,
            stopTwo: false,
            stopThree: false,
            stopFour: false,
        }
    );

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
                                numOctaves={stopAnimationRipple ? "2" : "4"}
                                result="turbulence"
                            >
                                <animate
                                    attributeName="baseFrequency"
                                    values="0.05 0.4; 0.02 0.35; 0.05 0.4"
                                    dur={stopAnimationRipple ? "0s" : "160s"}
                                    begin="-10s"
                                    repeatCount="indefinite"
                                    calcMode="spline"
                                    keyTimes="0; 0.5; 1"
                                    keySplines="0.5 0 0.5 1 ; 0.5 0 0.5 1"
                                />
                            </feTurbulence>
                            <feColorMatrix in="turbulence" result="turbulenceSpin" type="hueRotate" values="90">
                                <animate
                                    attributeName="values"
                                    values="0;180;360"
                                    dur={stopAnimationWater ? "0s" : "10s"}
                                    repeatCount="indefinite"
                                />
                            </feColorMatrix>
                            <feDisplacementMap
                                in2="turbulenceSpin"
                                in="SourceGraphic"
                                result="water"
                                scale="4"
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
                        <filter id="banner-glow-up">
                            <feGaussianBlur stdDeviation="4" />
                        </filter>
                        <linearGradient id="banner-glow-up-grad" x1="0" x2="0" y1="0" y2="1">
                            <stop stopColor="hsl(90deg 100% 80%)" stopOpacity="0" offset="0" />
                            <stop stopColor="hsl(90deg 100% 80%)" stopOpacity="0.3" offset="0.75" />
                            <stop stopColor="hsl(90deg 100% 80%)" stopOpacity="0.6" offset="1" />
                        </linearGradient>
                    </defs>
                    <g strokeWidth={0.1} stroke="white" fill="none">
                        <g filter="url(#banner-glow)">
                            <path d="M20 70 m 60 20" />
                            <path
                                id="banner-w1"
                                d="M 49.5 75 a 20 2.8 0 1 0 1 0 Z"
                                className={style.bob}
                                style={{
                                    animationDuration: stopAnimationMotion ? "0s" : undefined,
                                }}
                            />
                            <path id="banner-w2" d="M 49.5 76.2 a 15 2 0 1 0 1 0 Z" />
                            <DashArray
                                count={24}
                                start={15}
                                end={18}
                                speed={stopAnimationMotion ? 0 : 0.8}
                                id="banner-w3"
                                style={{
                                    transform: "translateY(29%)",
                                    transformOrigin: "center center",
                                }}
                            />
                            <path id="banner-w4" d="M 49.5 73.1 a 13 2 0 1 0 1 0 Z" strokeDasharray={Math.PI * 13}>
                                <animate
                                    attributeName="stroke-dashoffset"
                                    values={[0, Math.PI * -13, Math.PI * -13 * 2].join(";")}
                                    dur={stopAnimationMotion ? "0s" : "11s"}
                                    repeatCount="indefinite"
                                />
                            </path>
                            <DashArray
                                count={6}
                                start={10}
                                end={12}
                                endOffset={3}
                                id="banner-w5"
                                speed={stopAnimationMotion ? 0 : 3}
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
                                    dur={stopAnimationMotion ? "0s" : "14s"}
                                    startOffset="-5s"
                                    repeatCount="indefinite"
                                />
                            </path>
                        </g>
                        <path
                            d="M30 38 h 40 l -15 40 h -10 Z"
                            filter="url(#banner-glow-up)"
                            stroke="none"
                            fill="url(#banner-glow-up-grad)"
                            style={{
                                mixBlendMode: "lighten",
                            }}
                            opacity="0.6"
                        />
                        <g clipPath="url(#waterClip)">
                            <g filter="url(#banner-glow) url(#banner-reflect)">
                                <use
                                    href="#banner-w1"
                                    style={{
                                        transform: "scaleY(-1) translateY(-65%)",
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
                                <path d="M30 70 m 40 30" />
                            </g>
                        </g>
                    </g>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    className={style.fog}
                    viewBox="0 0 100 100"
                >
                    <defs>
                        <filter id="banner-clouds" colorInterpolationFilters="sRGB">
                            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="8" />
                            <feTurbulence
                                result="turb"
                                type="fractalNoise"
                                baseFrequency="0.04 0.06"
                                numOctaves={stopAnimationMotion ? "6" : "10"}
                            >
                                <animate
                                    attributeName="baseFrequency"
                                    values="0.04 0.06; 0.06 0.08; 0.04 0.06"
                                    dur={stopAnimationFog ? "0s" : "100s"}
                                    repeatCount="indefinite"
                                    calcMode="spline"
                                    keyTimes="0; 0.5; 1"
                                    keySplines="0.5 0 0.5 1; 0.5 0 0.5 1"
                                />
                            </feTurbulence>
                            <feColorMatrix in="turb" result="turbSpin" type="hueRotate" values="90">
                                <animate
                                    attributeName="values"
                                    values="0;180;360"
                                    dur={stopAnimationFog ? "0s" : "10s"}
                                    repeatCount="indefinite"
                                />
                            </feColorMatrix>
                            <feDisplacementMap
                                in="blur"
                                in2="turbSpin"
                                xChannelSelector="R"
                                yChannelSelector="G"
                                scale="25"
                            />
                        </filter>
                    </defs>
                    <path d="M100 100 M0 0 M35 40 h30 l-10 30 h-10 Z" fill="white" filter="url(#banner-clouds)" />
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
    useAnimationFrame((delta) => {
        setOffset((o) => o + delta / 10000);
    });

    if (reverse) {
        speed *= -1;
    }

    const scaleY = 0.15;

    const dashArray = range(count)
        .map((i) => {
            const startY = start * scaleY;
            const endY = end * scaleY;
            let rad = i * (TAU / count) + 0.3; // 0.3 is just a random offset for ascetic
            const increment = offset * speed;
            rad += isNaN(increment) || increment === Infinity ? 0 : increment;
            const x = Math.sin(rad) * start + 50;
            const y = Math.cos(rad) * startY + 50;
            const x2 = Math.sin(rad) * end + 50;
            const y2 = Math.cos(rad) * endY + 50 + endOffset;
            return `M${x} ${y} L${x2} ${y2}`;
        })
        .join("");

    return <path d={dashArray} {...props} />;
}
