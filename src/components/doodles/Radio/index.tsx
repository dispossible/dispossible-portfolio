import style from "./radio.module.css";

export default function Radio() {
    return (
        <div className={style.root} role="img" aria-label="A radio">
            <div className={style.radio}></div>
        </div>
    );
}
