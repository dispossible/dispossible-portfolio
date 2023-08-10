import style from "./clock.module.css";

export default function Clock() {
    return (
        <div className={style.root} role="img" aria-label="A clock with numbers and hands showing a fixed time">
            <div className={style.clock}></div>
        </div>
    );
}
