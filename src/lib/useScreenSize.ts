import { useEffect, useState } from "react";

export default function useScreenSize() {
    const [size, setSize] = useState({
        width: 319,
        height: 800,
    });
    useEffect(() => {
        const updateSize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        if (size.width === 319) {
            updateSize();
        }
        window.addEventListener("resize", updateSize, { passive: true });
        return () => window.removeEventListener("resize", updateSize);
    });

    return size;
}
