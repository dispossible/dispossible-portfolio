import style from "./pencil.module.css";

export default function Pencil() {
    return (
        <div className={style.root} role="img" aria-label="A pencil">
            <div className={style.pencil}></div>
        </div>
    );
}
