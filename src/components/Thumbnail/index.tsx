import clsx from "clsx";
import Link from "next/link";
import { CSSProperties, MouseEventHandler, useRef, useState } from "react";

import style from "./thumbnail.module.css";

interface ThumbnailProps {
    className?: string;
    imageUrl: string;
    title: string;
    href: string;
}

export default function Thumbnail({ className, href, imageUrl, title }: ThumbnailProps) {
    const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
    const $thumb = useRef<HTMLDivElement>(null);

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
        if ($thumb.current) {
            const xPx = e.pageX - $thumb.current.offsetLeft;
            const yPx = e.pageY - $thumb.current.offsetTop;

            const x = xPx / $thumb.current.clientWidth;
            const y = yPx / $thumb.current.clientHeight;

            setMousePos({
                x,
                y,
            });
        }
    };
    const handleMouseOut = () => {
        setMousePos({
            x: 0.5,
            y: 0.5,
        });
    };

    return (
        <div
            className={clsx(className, style.root)}
            style={
                {
                    "--thumb": `url("${imageUrl}")`,
                    "--x": mousePos.x,
                    "--y": mousePos.y,
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
