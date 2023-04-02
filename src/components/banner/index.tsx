import styles from "./banner.module.css";

const logoPaths = [
    {
        letter: "D",
        width: 27,
        height: 42,
        start: "M26.64 36.24L21.42 41.46H6.65997H0.719971V10.32L5.93997 5.22H5.5V0H21.42L26.64 5.22V36.24ZM20.7 36.24V5.22H6.65997V40.74L11.04 36.24H20.7Z",
        end: "M26.64 36.24L21.42 41.46H6.66H0.72V10.32L5.94 5.22H0V0H21.42L26.64 5.22V36.24ZM20.7 36.24V5.22H6.66V40.74L11.04 36.24H20.7Z",
    },
    {
        letter: "i",
        width: 7,
        height: 42,
        start: "M6.58002 41.46H0.640015V24.5H6.58002V41.46Z",
        end: "M6.58002 41.46H0.640015V0H6.58002V41.46Z",
    },
    {
        letter: "s",
        width: 27,
        height: 42,
        start: "M8.31769 5.22H6.52002V15.54H20.26L25.36 20.7V36.24L20.26 41.46H5.74001L0.580017 36.24V32.1L6.52002 30V36.24H19.42V20.7H5.74001L0.580017 15.54V5.22L5.74001 0H7.59769L8.31769 5.22Z",
        end: "M26.92 5.22H6.52002V15.54H20.26L25.36 20.7V36.24L20.26 41.46H5.74001L0.580017 36.24V32.1L6.52002 26.4V36.24H19.42V20.7H5.74001L0.580017 15.54V5.22L5.74001 0H21.7L26.92 5.22Z",
    },
    {
        letter: "p",
        width: 28,
        height: 42,
        start: "M27.56 20.7L22.34 25.92H7.58001V27.5H1.64001V10.32L6.86002 5.22H6.17786V0H22.34L27.56 5.22V20.7ZM21.62 20.7V5.22H7.58001V25.2L11.96 20.7H21.62Z",
        end: "M27.56 20.7L22.34 25.92H7.58004V41.46H1.64005V10.32L6.86005 5.22H0.920044V0H22.34L27.56 5.22V20.7ZM21.62 20.7V5.22H7.58004V25.2L11.96 20.7H21.62Z",
    },
    {
        letter: "o",
        width: 27,
        height: 42,
        start: "M26.4801 36.24L21.2601 41.46H5.72006L0.560059 36.24V5.22L5.72006 0H21.2601L26.4801 5.22V36.24ZM20.5401 36.24V5.22H6.50006V36.24H20.5401Z",
        end: "M26.4801 36.24L21.2601 41.46H5.72006L0.560059 36.24V5.22L5.72006 0H21.2601L26.4801 5.22V36.24ZM20.5401 36.24V5.22H6.50006V36.24H20.5401Z",
    },
    {
        letter: "s",
        width: 27,
        height: 42,
        start: "M18.9521 5.22H6.42004V15.54H20.16L25.26 20.7V36.24L20.16 41.46H5.64005L0.480042 36.24V35.7L6.42004 34V36.24H19.32V20.7H5.64005L0.480042 15.54V5.22L5.64005 0H13.7321L18.9521 5.22Z",
        end: "M26.82 5.22H6.42004V15.54H20.16L25.26 20.7V36.24L20.16 41.46H5.64005L0.480042 36.24V32.1L6.42004 26.4V36.24H19.32V20.7H5.64005L0.480042 15.54V5.22L5.64005 0H21.6L26.82 5.22Z",
    },
    {
        letter: "s",
        width: 28,
        height: 42,
        start: "M8.45227 5.22H6.76007V15.54H20.5001L25.6001 20.7V36.24L20.5001 41.46H5.98007L0.820068 36.24V35.2L6.76007 29.5V36.24H19.6601V20.7H5.98007L0.820068 15.54V5.22L5.98007 0H7.23227L8.45227 5.22Z",
        end: "M27.1601 5.22H6.76007V15.54H20.5001L25.6001 20.7V36.24L20.5001 41.46H5.98007L0.820068 36.24V32.1L6.76007 26.4V36.24H19.6601V20.7H5.98007L0.820068 15.54V5.22L5.98007 0H21.9401L27.1601 5.22Z",
    },
    {
        letter: "i",
        width: 7,
        height: 42,
        start: "M6.10004 27H0.160034V0H6.10004V27Z",
        end: "M6.10004 41.46H0.160034V0H6.10004V41.46Z",
    },
    {
        letter: "b",
        width: 27,
        height: 42,
        start: "M26.74 36.24L21.52 41.46H0.820007V10.32L6.04001 5.22H5.43988V0H17.08L22.3 5.22V12.6L18.64 16.26H22.3L26.74 20.7V36.24ZM16.36 16.26V5.22H6.76001V20.7L11.14 16.26H16.36ZM20.8 36.24V20.7H6.76001V36.24H20.8Z",
        end: "M26.7401 36.24L21.5201 41.46H0.820038V10.32L6.04004 5.22H0.100037V0H17.08L22.3 5.22V12.6L18.64 16.26H22.3L26.7401 20.7V36.24ZM16.36 16.26V5.22H6.76004V20.7L11.14 16.26H16.36ZM20.8 36.24V20.7H6.76004V36.24H20.8Z",
    },
    {
        letter: "l",
        width: 26,
        height: 42,
        start: "M25.9401 41.46H0.740051V27H6.68005V36.24H20.0001V31.08L25.9401 25.2V41.46Z",
        end: "M25.9401 41.46H0.740051V0H6.68005V36.24H20.0001V31.08L25.9401 25.2V41.46Z",
    },
    {
        letter: "e",
        width: 23,
        height: 42,
        start: "M11.9323 41.46H1.66003V10.32L6.88004 5.22H5.43225V0H22.36V5.22H7.60004V19.98L11.98 15.54H13.4323V20.7H7.60004V36.24H11.9323V41.46Z",
        end: "M22.3601 41.46H1.66006V10.32L6.88007 5.22H0.940063V0H22.3601V5.22H7.60007V19.98L11.9801 15.54H22.3601V20.7H7.60007V36.24H22.3601V41.46Z",
    },
];

export default function Banner() {
    return (
        <section className={styles.root}>
            <small className={styles.small}>Timothy Bailey</small>
            <h1 className={styles.title}>
                {logoPaths.map((path, i) => {
                    return (
                        <span key={i} className={styles.letter}>
                            {path.letter}
                            <svg
                                className={styles.letterImg}
                                viewBox={`0 0 ${path.width} ${path.height}`}
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                role="presentation"
                            >
                                <path fill="white">
                                    <animate
                                        attributeName="d"
                                        from={path.start}
                                        to={path.end}
                                        dur="200ms"
                                        repeatCount="1"
                                        begin={`${i * 50 + 400}ms`}
                                        fill="freeze"
                                    />
                                    <animate
                                        attributeName="opacity"
                                        from={0}
                                        to={1}
                                        dur="200ms"
                                        repeatCount="1"
                                        begin={`${i * 50 + 400}ms`}
                                        fill="freeze"
                                    />
                                </path>
                            </svg>
                        </span>
                    );
                })}
            </h1>
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
                className={styles.bracket}
                role="presentation"
                viewBox="0 0 172 408"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    transform="rotate(180 86 204)"
                    fill="#393B36"
                    d="M72.4 407.2 114 364h18.4l39.2 43.2H72.4ZM60.8 210.8l42.8 41.6v98l-42.8 39.2V210.8ZM72 .8h99.2L131.6 44h-18L72 .8Zm-12 196V18l42.8 38.8V156L60 196.8Zm-59.6 16V194l42.8-38.8V254L.4 212.8Z"
                />
            </svg>
        </section>
    );
}
