import { DependencyList, useEffect } from "react";

export default function useAnimationFrame<T extends object | void = any>(
    callback: (delta: number, store: T) => T,
    dependencies: DependencyList = [],
    store?: T
) {
    useEffect(() => {
        let stop = false;
        let lastFrameTime = Date.now();
        let valueStore = { ...store } as T;
        const updateOffset = () => {
            if (!stop) {
                const delta = Date.now() - lastFrameTime;
                valueStore = callback(delta, valueStore);
                lastFrameTime = Date.now();
                requestAnimationFrame(updateOffset);
            }
        };
        requestAnimationFrame(updateOffset);
        return () => {
            stop = true;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}
