import Link from "next/link";
import styles from "./navigation.module.css";

interface NavigationProps {
    isHomePage: boolean;
}

export default function Navigation({ isHomePage }: NavigationProps) {
    return (
        <nav className={styles.root}>
            <ol className={styles.list}>
                <li>
                    <AnchorLink isHomePage={isHomePage} anchor="top">
                        {isHomePage ? "Top" : "Home"}
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink isHomePage={isHomePage} anchor="projects">
                        Projects
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink isHomePage={isHomePage} anchor={"about"}>
                        About
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink isHomePage={isHomePage} anchor={"photography"}>
                        Photography
                    </AnchorLink>
                </li>
                <li>
                    <AnchorLink isHomePage={isHomePage} anchor={"contact"}>
                        Contact
                    </AnchorLink>
                </li>
            </ol>
        </nav>
    );
}

interface AnchorLinkProps extends React.PropsWithChildren {
    isHomePage: boolean;
    anchor: string;
}

function AnchorLink({ children, anchor, isHomePage }: AnchorLinkProps) {
    if (isHomePage) {
        return (
            <a className={styles.link} href={`#${anchor}`}>
                {children}
            </a>
        );
    }
    return (
        <Link className={styles.link} href={`/#${anchor}`}>
            {children}
        </Link>
    );
}
