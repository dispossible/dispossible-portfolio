import { useEffect, useState } from "react";
import style from "./video.module.css";

interface VideoProps {
    youtubeId: string;
    title: string;
}

export default function Video({ youtubeId, title }: VideoProps) {
    const url = `https://www.youtube.com/embed/${youtubeId}?color=white&amp;modestbranding=1&amp;playsinline=1&amp;rel=0`;
    const [thumbUrl, setThumbUrl] = useState(`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`);

    useEffect(() => {
        const img = window.document.createElement("img");
        img.addEventListener("load", (e) => {
            if (img.width < 150) {
                setThumbUrl(`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`);
            }
        });
        img.src = thumbUrl;
    }, [youtubeId]);

    const thumbnail = `<style>*{padding:0;margin:0;overflow:hidden}body,html{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto;height:100%;object-fit:cover}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:#fff;text-shadow:0 0 .5em #000}</style><a href="${url}&amp;autoplay=1"><img src="${thumbUrl}" alt="${title}" /><span>&#x25BA;</span></a>`;

    return (
        <iframe
            width="100%"
            src={url}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            frameBorder="0"
            className={style.video}
            srcDoc={thumbnail}
            loading="lazy"
        ></iframe>
    );
}
