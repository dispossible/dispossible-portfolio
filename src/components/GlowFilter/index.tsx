interface GlowFilterProps {
    id: string;
    size?: number;
}

export default function GlowFilter({ id, size = 2 }: GlowFilterProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={0} height={0}>
            <defs>
                <filter id={id}>
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

                    <feOffset in="s2R" result="s3R" dx={size} dy="0" />
                    <feOffset in="s2G" result="s3G" dx={-size} dy={size * -0.5} />
                    <feOffset in="s2B" result="s3B" dx="0" dy={-size} />

                    <feBlend in="s3R" in2="s3G" result="s3RG" mode="screen" />
                    <feBlend in="s3RG" in2="s3B" result="s3RGB" mode="screen" />
                </filter>
            </defs>
        </svg>
    );
}
