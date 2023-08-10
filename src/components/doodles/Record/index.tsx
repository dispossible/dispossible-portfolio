import style from "./record.module.css";

export default function Record() {
    return (
        <div className={style.root} role="img" aria-label="A record player">
            <div className={style.record}></div>
        </div>
    );
}
