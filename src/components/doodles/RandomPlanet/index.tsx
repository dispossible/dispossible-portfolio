import { useCallback, useState } from "react";
import Planet from "../Planet";
import style from "./randomPlanet.module.css";

export default function RandomPlanet() {
    const [count, setCount] = useState(0);
    const [seed, setSeed] = useState(28159838274);
    const [hasRings, setHasRings] = useState(true);

    const setNewSeed = useCallback(() => {
        setSeed(Math.round(Math.random() * 10 ** 11));
        setHasRings(Math.random() > 0.5);
        setCount((c) => c + 1);
    }, []);

    return (
        <div className={style.root}>
            <Planet seed={seed} hasRings={hasRings} />
            <button
                onClick={setNewSeed}
                aria-label="Refresh"
                className={style.btn}
                style={{ transform: `rotate(-${count / 2}turn)` }}
            >
                &#128260;&#xFE0E;
            </button>
        </div>
    );
}
