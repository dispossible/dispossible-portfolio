import clsx from "clsx";
import style from "./candles.module.css";

export default function Candles() {
    return (
        <div className={style.root} role="img" aria-label="Three candles burning with blue flames drifting in the air">
            <div className={clsx(style.candle, style.candle_one)}></div>
            <div className={clsx(style.candle, style.candle_two)}></div>
            <div className={clsx(style.candle, style.candle_three)}></div>
        </div>
    );
}
