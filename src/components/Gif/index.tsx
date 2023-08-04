import Image, { ImageProps, StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import styles from "./gif.module.css";

type GifProps = {
    src: StaticImageData;
    thumb: StaticImageData;
    alt: string;
} & ImageProps;

export function Gif({ src, alt, thumb, ...props }: GifProps) {
    const [paused, setPaused] = useState(false);

    // Pause the gif automatically if preferred
    useEffect(() => {
        setPaused(window?.matchMedia("(prefers-reduced-motion)")?.matches);
    }, []);

    // Preload both states for a fast switch
    useEffect(() => {
        const img1 = window.document.createElement("img");
        const img2 = window.document.createElement("img");
        img1.src = src.src;
        img2.src = thumb.src;
    }, [src, thumb]);

    return (
        <div className={styles.wrap}>
            <Image src={paused ? thumb : src} alt={alt} {...props} />
            <button className={styles.play} type="button" onClick={() => setPaused((p) => !p)}>
                {paused ? <>&#x23F5;</> : <>&#x23F8;</>}
            </button>
        </div>
    );
}
