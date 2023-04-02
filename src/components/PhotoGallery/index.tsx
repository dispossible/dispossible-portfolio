import { PhotoData } from "@/lib/photos";
import useAnimationFrame from "@/lib/useAnimationFrame";
import useScreenSize from "@/lib/useScreenSize";
import Image from "next/image";
import { useMemo, useRef } from "react";
import PageWrapper from "../PageWrapper";
import styles from "./photoGallery.module.css";

const TITLE = "TITLE";

interface PhotoGalleryProps {
    photos: PhotoData[];
}

interface ColumnData {
    index: number;
    height: number;
    photos: (PhotoData | "TITLE")[];
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
    const screen = useScreenSize();

    const columns = useMemo(() => {
        const width = Math.max(400, Math.min(screen.width, 1800));

        const columnCount = Math.floor(width / 400);
        const columnData: ColumnData[] = new Array(columnCount).fill(0).map(
            (_, i) =>
                ({
                    index: i,
                    height: 0,
                    photos: [],
                } satisfies ColumnData)
        );

        const titleIndex = columnCount > 1 ? 1 : 0;

        columnData[titleIndex].height += 150;
        columnData[titleIndex].photos.push(TITLE);

        photos.forEach((photo) => {
            const smallestColumn = columnData.sort((a, b) => a.height - b.height)[0];
            smallestColumn.photos.push(photo);
            smallestColumn.height += photo.height;
        });

        return columnData.sort((a, b) => {
            if (a.photos[0] === TITLE) return -1;
            if (b.photos[0] === TITLE) return 1;
            return a.index - b.index;
        });
    }, [screen.width, photos]);

    const $section = useRef<HTMLElement>(null);

    useAnimationFrame(() => {
        if (!$section.current) {
            return;
        }
        const top = $section.current.offsetTop;
        $section.current.style.setProperty("--scroll-position", `${window.scrollY - top}px`);
    });

    return (
        <PageWrapper className={styles.root} id="photography" ref={$section}>
            {columns.map((column) => {
                return (
                    <div key={column.index} data-index={column.index + 1} className={styles.column}>
                        {column.photos.map((photo) => {
                            if (photo === TITLE) {
                                return (
                                    <div key={TITLE} className={styles.title}>
                                        <h2>Photography</h2>
                                        <p>A small collection of my favorite photographs.</p>
                                    </div>
                                );
                            }
                            return (
                                <Image
                                    className={styles.photo}
                                    src={photo.path}
                                    width={photo.width}
                                    height={photo.height}
                                    key={photo.id}
                                    alt={photo.alt}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </PageWrapper>
    );
}
