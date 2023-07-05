import { ProjectPostMeta } from "@/lib/projects";
import Link from "next/link";
import { CSSProperties } from "react";
import styles from "./projectPage.module.css";

interface ProjectPageProps extends ProjectPostMeta {
    children?: React.ReactNode;
}

export default function ProjectPage({ title, date, thumb, children }: ProjectPageProps) {
    return (
        <article className={styles.root}>
            <header className={styles.header} style={{ "--header-img": `url("${thumb.src}")` } as CSSProperties}>
                <h1 className={styles.title}>{title}</h1>
            </header>
            <div className={styles.content}>{children}</div>
            <footer className={styles.footer}>
                <Link href="/#projects">&lt; Return to project list</Link>
            </footer>
        </article>
    );
}
