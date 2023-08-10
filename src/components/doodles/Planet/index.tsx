import clsx from "clsx";
import { CSSProperties } from "react";
import styles from "./planet.module.css";

type PlanetProps = {
    seed: number;
    hasRings: boolean;
};

export default function Planet({ seed, hasRings }: PlanetProps) {
    return (
        <div className={styles.planet} role="img" aria-label="A planet in space">
            <div
                className={clsx(
                    styles.planetEl,
                    {
                        [styles.planetEl_rings]: hasRings,
                        [styles.planetEl_alt]: seed % 2 === 0,
                    },
                    styles[`planetEl_surf${seed % 6}`]
                )}
                style={
                    {
                        "--planet-hue": `${seed % 360}deg`,
                        "--planet-sat": `${Math.round(seed / 1000) % 40}%`,
                        "--planet-spin": `${(seed % 100) - 50}deg`,
                        "--planet-size": `${hasRings ? (seed % 20) + 15 : (seed % 20) + 20}%`,
                        "--planet-flip": Math.round(seed / 1000) % 3 === 0 ? -1 : 1,
                        "--ring-size": `${(Math.round(seed / 10000) % 10) + 5}px`,
                        "--ring-opacity": `${(seed % 10) + 50}%`,
                    } as CSSProperties
                }
            ></div>
        </div>
    );
}
