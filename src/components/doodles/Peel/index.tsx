import clsx from "clsx";
import style from "./peel.module.css";

export default function Peel() {
    return (
        <div
            className={style.root}
            role="img"
            aria-label="A circle that is unrolling and folding back on itself in a loop"
        >
            <div className={style.peal}>
                <div className={clsx(style.circle, style.inner)}>
                    <div className={style.left}></div>
                    <div className={style.right}></div>
                </div>
                <div className={clsx(style.circle, style.outer)}>
                    <div className={style.left}></div>
                    <div className={style.right}></div>
                </div>
            </div>
        </div>
    );
}
