import style from "./squareDance.module.css";

export default function SquareDance() {
    return (
        <div className={style.root} role="img" aria-label="A stack of squares that are rolling in a tower">
            <div className={style.one}>
                <div className={style.two}>
                    <div className={style.three}></div>
                </div>
            </div>
            <div className={style.floor}></div>
        </div>
    );
}
