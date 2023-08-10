import clsx from "clsx";
import style from "./stargate.module.css";

export default function Stargate() {
    return (
        <div className={style.root} role="img" aria-label="A Stargate from the TV show 'Stargate'">
            <div className={style.gate}>
                <div className={style.glyphs}>
                    <div className={style.glyph}>A</div>
                    <div className={style.glyph}>B</div>
                    <div className={style.glyph}>C</div>
                    <div className={style.glyph}>D</div>
                    <div className={style.glyph}>E</div>
                    <div className={style.glyph}>F</div>
                    <div className={style.glyph}>G</div>
                    <div className={style.glyph}>H</div>
                    <div className={style.glyph}>I</div>
                    <div className={style.glyph}>J</div>
                    <div className={style.glyph}>K</div>
                    <div className={style.glyph}>L</div>
                    <div className={style.glyph}>M</div>
                    <div className={style.glyph}>N</div>
                    <div className={style.glyph}>O</div>
                    <div className={style.glyph}>P</div>
                    <div className={style.glyph}>Q</div>
                    <div className={style.glyph}>R</div>
                    <div className={style.glyph}>S</div>
                    <div className={style.glyph}>T</div>
                    <div className={style.glyph}>U</div>
                    <div className={style.glyph}>V</div>
                    <div className={style.glyph}>W</div>
                    <div className={style.glyph}>X</div>
                    <div className={style.glyph}>Y</div>
                    <div className={style.glyph}>Z</div>
                    <div className={style.glyph}>a</div>
                    <div className={style.glyph}>b</div>
                    <div className={style.glyph}>c</div>
                    <div className={style.glyph}>d</div>
                    <div className={style.glyph}>e</div>
                    <div className={style.glyph}>f</div>
                    <div className={style.glyph}>g</div>
                    <div className={style.glyph}>h</div>
                    <div className={style.glyph}>i</div>
                    <div className={style.glyph}>j</div>
                    <div className={style.glyph}>k</div>
                    <div className={style.glyph}>l</div>
                    <div className={style.glyph}>m</div>
                </div>
                <div className={style.chevrons}>
                    <div className={style.chevron}></div>
                    <div className={style.chevron}></div>
                    <div className={style.chevron}></div>
                    <div className={style.chevron}></div>
                    <div className={style.chevron}></div>
                    <div className={style.chevron}></div>
                    <div className={style.chevron}></div>
                    <div className={style.chevron}></div>
                    <div className={style.chevron}></div>
                </div>
                <div className={clsx(style.chevrons, style.chevronInners)}>
                    <div className={clsx(style.chevron, style.chevronInner)}></div>
                    <div className={clsx(style.chevron, style.chevronInner)}></div>
                    <div className={clsx(style.chevron, style.chevronInner)}></div>
                    <div className={clsx(style.chevron, style.chevronInner)}></div>
                    <div className={clsx(style.chevron, style.chevronInner)}></div>
                    <div className={clsx(style.chevron, style.chevronInner)}></div>
                    <div className={clsx(style.chevron, style.chevronInner)}></div>
                    <div className={clsx(style.chevron, style.chevronInner)}></div>
                    <div className={clsx(style.chevron, style.chevronInner)}></div>
                </div>
            </div>
        </div>
    );
}
