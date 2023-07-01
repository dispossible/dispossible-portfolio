import Image, { StaticImageData } from "next/image";
import { CSSProperties, useState } from "react";
import { Modal } from "../Modal";
import styles from "./miniGallery.module.css";

type MiniGalleryProps = {
    children?: {
        src: StaticImageData;
        alt: string;
    }[];
    columns?: number;
};

export function MiniGallery({ children = [], columns = 4 }: MiniGalleryProps) {
    const [imageIndex, setImageIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.gallery} style={{ "--columns": columns } as CSSProperties}>
                {children?.map((image, i) => (
                    <button
                        className={styles.button}
                        key={image.src.src}
                        onClick={() => {
                            setIsOpen(true);
                            setImageIndex(i);
                        }}
                    >
                        <Image className={styles.image} src={image.src} alt={image.alt} />
                    </button>
                ))}
            </div>
            {children.length > 0 && (
                <Modal
                    isOpen={isOpen}
                    onClose={() => {
                        setIsOpen(false);
                    }}
                >
                    <Image
                        className={styles.largeImage}
                        key={children[imageIndex].src.src}
                        src={children[imageIndex].src}
                        alt={children[imageIndex].alt}
                    />
                </Modal>
            )}
        </>
    );
}
