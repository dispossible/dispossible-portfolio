import { ProjectPostMeta } from "@/lib/projects";
import { CSSProperties } from "react";
import styles from "./projectPage.module.css";

interface ProjectPageProps extends ProjectPostMeta {
    children?: React.ReactNode;
}

export default function ProjectPage({ title, date, thumb, children }: ProjectPageProps) {
    return (
        <article className={styles.root}>
            <header className={styles.header} style={{ "--header-img": `url("/projects/${thumb}")` } as CSSProperties}>
                <h1 className={styles.title}>{title}</h1>
            </header>
            <main className={styles.content}>{children}</main>
        </article>
    );
}
