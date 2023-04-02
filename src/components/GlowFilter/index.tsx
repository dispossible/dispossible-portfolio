interface GlowFilterProps {
    id: string;
    size?: number;
}

export default function GlowFilter({ id, size = 2 }: GlowFilterProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={0} height={0}>
            <defs>
                <filter id={id}>
                    <feColorMatrix
                        in="SourceGraphic"
                        result="s2R"
                        type="matrix"
                        values="1 0 0 0 0
                                0 0 0 0 0
                                0 0 0 0 0
                                0 0 0 1 0"
                    />
                    <feColorMatrix
                        in="SourceGraphic"
                        result="s2G"
                        type="matrix"
                        values="0 0 0 0 0
                                0 1 0 0 0
                                0 0 0 0 0
                                0 0 0 1 0"
                    />
                    <feColorMatrix
                        in="SourceGraphic"
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
