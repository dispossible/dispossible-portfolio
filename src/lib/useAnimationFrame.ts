import { useCallback, useEffect, useRef } from "react";

export default function useAnimationFrame(callback: (delta: number) => void) {
    const requestRef = useRef<number>();
    const previousTimeRef = useRef(Date.now());

    const tick = useCallback(
        (time: number) => {
            let delta = time - previousTimeRef.current;
            delta = Math.min(delta, 50);
            callback(delta);
            previousTimeRef.current = time;
            requestRef.current = requestAnimationFrame(tick);
        },
        [callback]
    );

    useEffect(() => {
        requestRef.current = requestAnimationFrame(tick);
        return () => {
            if (requestRef.current) cancelAnimationFrame(requestRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [callback]);
}
