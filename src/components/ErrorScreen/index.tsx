import { ReactNode } from "react";

import styles from "./errorScreen.module.css";

type ErrorScreenProps = {
    status?: number;
    message?: ReactNode;
};

export default function ErrorScreen({ status, message }: ErrorScreenProps) {
    return (
        <div className={styles.wrapper}>
            <header className={styles.header}>
                <h1 className={styles.title}>{status}</h1>
                <small>{message}</small>
            </header>
        </div>
    );
}
