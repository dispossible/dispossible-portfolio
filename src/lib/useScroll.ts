import { useEffect } from "react";

export default function useScroll(func: (e: Event) => void, passive?: boolean) {
    useEffect(() => {
        const invoke = (e: Event) => func(e);
        window.addEventListener("scroll", invoke, { passive });
        return () => window.removeEventListener("scroll", invoke);
    }, [func]);
}
