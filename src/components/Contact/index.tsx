import styles from "./contact.module.css";

export default function Contact() {
    return (
        <section className={styles.root}>
            <div className={styles.layout} id="contact">
                <div className={styles.content}>
                    <h2 className={styles.title}>Contact</h2>
                    <ul className={styles.list}>
                        <li>
                            <a href="mailto:mail@dispossible.com">mail@dispossible.com</a>
                        </li>
                        <li>
                            <a href="//github.com/dispossible">GitHub</a>
                        </li>
                        <li>
                            <a href="//codepen.io/zepha">Codepen</a>
                        </li>
                    </ul>
                </div>
                <svg
                    className={styles.bracket}
                    role="presentation"
                    viewBox="0 0 172 408"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="#393B36"
                        d="M72.4 407.2 114 364h18.4l39.2 43.2H72.4ZM60.8 210.8l42.8 41.6v98l-42.8 39.2V210.8ZM72 .8h99.2L131.6 44h-18L72 .8Zm-12 196V18l42.8 38.8V156L60 196.8Zm-59.6 16V194l42.8-38.8V254L.4 212.8Z"
                    />
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="presentation"
                    viewBox="0 0 828 207"
                    fill="none"
                    className={styles.letters}
                >
                    <path
                        fill="#393B36"
                        d="M7.5 206.6 28.1 185h49.4L97 206.6H7.5Zm-6-98.2 21.6 20.8v49L1.5 197.8v-89.4Zm101.8 89.4-21.6-20.6V128l21.6-19.6v89.4ZM7.3 3.4h89.4L77 25H28L7.3 3.4Zm-6.4 98V12l21.6 19.4V81L1 101.4ZM102.7 12v89.4L81.1 82V32.6L102.7 12Zm28.8 79.4V1.6L153 21.4v49.4l-21.6 20.6ZM253.3 1.6v89.8l-21.6-19.8V22.4l21.6-20.8ZM130.9 98.2l21.6 20.6v49.4l-21.6 19.6V98.2Zm121.8 89.6L231 167v-49.2l21.6-19.6v89.6Zm-89.4-127V20.2l56.8 95.6v40.8l-56.8-95.8Zm179.7 137-21.6-20.6V128l21.6-19.6v89.4ZM270.6 21.4a271 271 0 0 0-14-10.6l14-10.8h122.8l14 10.8-14 10.6h-51v80L320.8 82V32.6l11.8-11.2h-62Zm150.8 87 21.6 20.8v49l-21.6 19.6v-89.4Zm101.8 89.4-21.6-20.6V128l21.6-19.6v89.4Zm-78.6-82.2-14.2-11L444.6 94h54.6l14 10.6-14 11h-54.6ZM427.2 3.4h89.4L496.8 25h-49L427.2 3.4Zm-6.4 98V12l21.6 19.4V81l-21.6 20.4ZM522.6 12v89.4L501 82V32.6L522.6 12Zm47.8 194.6L591 185h49.4l19.6 21.6h-89.6Zm-5.8-98.2 21.4 20.8v49l-21.4 19.6v-89.4Zm5.6-105h89.2L640 25h-49.4L570.2 3.4Zm-6.2 98V12l21.4 19.4V81L564 101.4Zm199 96.4-21.7-20.6V128l21.6-19.6v89.4ZM690.4 21.4a271 271 0 0 0-14-10.6l14-10.8h122.8l14 10.8-14 10.6h-51v80L740.7 82V32.6l11.8-11.2h-62Z"
                    />
                </svg>
            </div>
        </section>
    );
}
