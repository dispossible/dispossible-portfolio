import styles from "./contact.module.css";

export default function Contact() {
    return (
        <section className={styles.root}>
            <div className={styles.layout} id="contact">
                <ul className={styles.list}>
                    <li>
                        <a className={styles.link} href="mailto:mail@dispossible.com">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 69">
                                <path
                                    fill="currentcolor"
                                    d="M7.5 0a7.6 7.6 0 0 0-3.24.73l42.22 42.09a4.85 4.85 0 0 0 6.96 0L95.74.73A7.6 7.6 0 0 0 92.5 0h-85Zm91.76 4.2L67.54 35.8l31.72 29.04c.48-.97.74-2.07.74-3.23V7.39c0-1.14-.27-2.23-.74-3.2ZM.7 4.24C.25 5.19 0 6.27 0 7.39v54.22c0 1.16.26 2.26.74 3.23l31.68-29L.7 4.25ZM63.98 39.3 57 46.28a10 10 0 0 1-14.06 0l-6.95-6.93L4.34 68.31c.96.44 2.03.69 3.16.69h85a7.6 7.6 0 0 0 3.16-.7L63.98 39.32Z"
                                />
                            </svg>
                            <span>mail@dispossible.com</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.link} href="//github.com/dispossible">
                            <svg viewBox="0 0 100 95" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill="currentcolor"
                                    d="M50 0C77.625 0 100 21.7939 100 48.7015C99.9973 58.9056 96.7094 68.8521 90.599 77.1408C84.4886 85.4295 75.8634 91.6431 65.9375 94.907C63.4375 95.394 62.5 93.8721 62.5 92.5936C62.5 90.95 62.5625 85.7146 62.5625 79.2007C62.5625 74.635 61 71.7129 59.1875 70.191C70.3125 68.9734 82 64.8338 82 46.1446C82 40.7875 80.0625 36.4652 76.875 33.0561C77.375 31.8386 79.125 26.8467 76.375 20.1502C76.375 20.1502 72.1875 18.8109 62.625 25.1421C58.625 24.0463 54.375 23.4985 50.125 23.4985C45.875 23.4985 41.625 24.0463 37.625 25.1421C28.0625 18.8718 23.875 20.1502 23.875 20.1502C21.125 26.8467 22.875 31.8386 23.375 33.0561C20.1875 36.4652 18.25 40.8483 18.25 46.1446C18.25 64.7729 29.875 68.9734 41 70.191C39.5625 71.4085 38.25 73.5392 37.8125 76.7048C34.9375 77.9832 27.75 80.053 23.25 72.6869C22.3125 71.2259 19.5 67.6341 15.5625 67.695C11.375 67.7559 13.875 70.0083 15.625 70.9215C17.75 72.0782 20.1875 76.4004 20.75 77.8006C21.75 80.54 25 85.7754 37.5625 83.523C37.5625 87.6017 37.625 91.437 37.625 92.5936C37.625 93.8721 36.6875 95.3331 34.1875 94.907C24.229 91.6783 15.5671 85.4772 9.43057 77.1835C3.29404 68.8898 -0.00550299 58.9246 6.88945e-06 48.7015C6.88945e-06 21.7939 22.375 0 50 0Z"
                                />
                            </svg>
                            <span>GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a className={styles.link} href="//codepen.io/zepha">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                                <path
                                    fill="currentcolor"
                                    d="M99.96 65.73c-.4 2.6-3.3 4-5.3 5.3l-10.69 7.1C75.48 83.85 66.9 89.55 58.4 95.26c-2 1.3-4 2.7-6 4-1.4 1-3.3 1-4.79 0-5.7-3.8-11.49-7.7-17.18-11.5L5.25 70.93c-2.2-1.4-5.1-2.8-5.2-5.8-.1-3.31 0-6.71 0-10.01v-16c0-2.9-.6-6.3 2.1-8.1 6.4-4.4 12.9-8.61 19.39-12.91C29.53 12.8 37.52 7.4 45.5 2.1 47.7.6 49.9-1 52.6.8c2.3 1.5 4.5 3 6.79 4.5 8.89 5.9 17.78 11.9 26.67 17.81l9.9 6.6c.6.4 1.3.8 1.9 1.3 1.39 1 1.99 2.4 1.99 4.1v27.52c.1 1.1.2 2.1.1 3.1 0-.2 0 .1 0 0ZM54.3 87.64l33.67-22.5-14.98-10.11-18.69 12.5v20.11Zm-8.59 0v-20L27.13 55.12l-15.08 10L45.7 87.64ZM8.65 57.13l10.69-7.2-10.7-7.21v14.4ZM45.7 12.2 12.05 34.72l14.98 10.1 18.58-12.5V12.2h.1ZM50 39.72l-15.19 10.2L50 60.12l15.18-10.2L50 39.72Zm4.3-27.52v20.02l18.58 12.5 14.98-10.1L54.3 12.2Zm37.06 30.52-10.7 7.2 10.8 7.2-.1-14.4Z"
                                />
                            </svg>
                            <span>Codepen</span>
                        </a>
                    </li>
                </ul>

                <svg
                    className={styles.bracket}
                    role="presentation"
                    viewBox="0 0 172 408"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill="var(--color-fg)"
                        d="M72.4 407.2 114 364h18.4l39.2 43.2H72.4ZM60.8 210.8l42.8 41.6v98l-42.8 39.2V210.8ZM72 .8h99.2L131.6 44h-18L72 .8Zm-12 196V18l42.8 38.8V156L60 196.8Zm-59.6 16V194l42.8-38.8V254L.4 212.8Z"
                    />
                </svg>
                <svg
                    className={styles.bracket}
                    role="presentation"
                    viewBox="0 0 172 408"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        transform="rotate(180 86 204)"
                        fill="var(--color-fg)"
                        d="M72.4 407.2 114 364h18.4l39.2 43.2H72.4ZM60.8 210.8l42.8 41.6v98l-42.8 39.2V210.8ZM72 .8h99.2L131.6 44h-18L72 .8Zm-12 196V18l42.8 38.8V156L60 196.8Zm-59.6 16V194l42.8-38.8V254L.4 212.8Z"
                    />
                </svg>
            </div>
        </section>
    );
}
