import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
    return (
        <nav className={styles.root}>
            <ol className={styles.list}>
                <li>
                    <Link className={styles.link} href={"/"}>
                        Top
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={"/#projects"}>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={"/#about"}>
                        About
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={"/#photography"}>
                        Photography
                    </Link>
                </li>
                <li>
                    <Link className={styles.link} href={"/#contact"}>
                        Contact
                    </Link>
                </li>
            </ol>
        </nav>
    );
}
