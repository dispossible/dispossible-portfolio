import { useEffect } from "react";

export default function useScroll(func: (e: Event) => void) {
    useEffect(() => {
        const invoke = (e: Event) => func(e);
        window.addEventListener("scroll", invoke, { passive: true });
        return () => window.removeEventListener("scroll", invoke);
    }, [func]);
}
