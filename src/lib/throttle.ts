export default function throttle<T = unknown, Args extends unknown[] = []>(
    callback: (...args: Args) => void,
    wait: number,
    immediate = false
) {
    let timeout: number | null = null;
    let initialCall = true;
    return function (this: T, ...args: Args) {
        const callNow = immediate && initialCall;
        const next = () => {
            callback.apply(this, args);
            timeout = null;
        };
        if (callNow) {
            initialCall = false;
            next();
        } else if (!timeout) {
            timeout = window.setTimeout(next, wait);
        }
    };
}
