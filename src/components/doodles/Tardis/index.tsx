import clsx from "clsx";
import style from "./tardis.module.css";

export default function Tardis() {
    return (
        <div
            className={style.root}
            role="img"
            aria-label="A TARDIS from the TV show 'Doctor Who' spinning around in a vortex, with thunder flashing around it"
        >
            <div className={style.tHold}>
                <div className={style.tPos}>
                    <div className={style.tRot}>
                        <div className={clsx(style.tSide, style.tSideF)}>
                            <div className={style.tSign}></div>
                            <div className={style.tTop}></div>
                            <div className={style.tBaseSide}></div>
                            <div className={clsx(style.tPanel, style.tPanelL)}>
                                <div className={style.tWindowT}></div>
                                <div className={style.tWindowB}></div>
                            </div>
                            <div className={clsx(style.tPanel, style.tPanelR)}>
                                <div className={style.tWindowT}></div>
                                <div className={style.tWindowB}></div>
                                <div className={style.tNotice}></div>
                            </div>
                        </div>
                        <div className={clsx(style.tSide, style.tSideL)}>
                            <div className={style.tSign}></div>
                            <div className={style.tTop}></div>
                            <div className={style.tBaseSide}></div>
                            <div className={clsx(style.tPanel, style.tPanelL)}>
                                <div className={style.tWindowT}></div>
                                <div className={style.tWindowB}></div>
                            </div>
                            <div className={clsx(style.tPanel, style.tPanelR)}>
                                <div className={style.tWindowT}></div>
                                <div className={style.tWindowB}></div>
                            </div>
                        </div>
                        <div className={clsx(style.tSide, style.tSideR)}>
                            <div className={style.tSign}></div>
                            <div className={style.tTop}></div>
                            <div className={style.tBaseSide}></div>
                            <div className={clsx(style.tPanel, style.tPanelL)}>
                                <div className={style.tWindowT}></div>
                                <div className={style.tWindowB}></div>
                            </div>
                            <div className={clsx(style.tPanel, style.tPanelR)}>
                                <div className={style.tWindowT}></div>
                                <div className={style.tWindowB}></div>
                            </div>
                        </div>
                        <div className={clsx(style.tSide, style.tSideB)}>
                            <div className={style.tSign}></div>
                            <div className={style.tTop}></div>
                            <div className={style.tBaseSide}></div>
                            <div className={clsx(style.tPanel, style.tPanelL)}>
                                <div className={style.tWindowT}></div>
                                <div className={style.tWindowB}></div>
                            </div>
                            <div className={clsx(style.tPanel, style.tPanelR)}>
                                <div className={style.tWindowT}></div>
                                <div className={style.tWindowB}></div>
                            </div>
                        </div>
                        <div className={style.tSignTop}></div>
                        <div className={clsx(style.tSignTop, style.tBase)}></div>
                        <div className={style.tLight}>
                            <div className={style.tLightSide}></div>
                            <div className={clsx(style.tLightSide, style.tLightSide1)}></div>
                            <div className={clsx(style.tLightSide, style.tLightSide2)}></div>
                            <div className={clsx(style.tLightSide, style.tLightSide3)}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.vortex}>
                <div className={style.vSpark}></div>
                <div className={style.vCloud}></div>
            </div>
        </div>
    );
}
