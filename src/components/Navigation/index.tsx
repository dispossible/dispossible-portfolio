import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./navigation.module.css";

interface NavigationProps {
    isHomePage: boolean;
}

export default function Navigation({ isHomePage }: NavigationProps) {
    const [open, setOpen] = useState(false);
    const $menu = useRef<HTMLOListElement>(null);

    useEffect(() => {
        const checkMenuSize = () => {
            if ($menu.current) {
                const height = $menu.current.clientHeight;
                $menu.current.style.setProperty("--menu-size", height + "px");
            }
        };

        checkMenuSize();
        window.addEventListener("resize", checkMenuSize, { passive: true });
        return () => window.removeEventListener("resize", checkMenuSize);
    }, []);

    return (
        <nav className={styles.root}>
            <ol
                ref={$menu}
                className={clsx(styles.list, {
                    [styles.listOpen]: open,
                })}
                onClick={() => {
                    setOpen(false);
                }}
            >
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
            <button
                className={clsx(styles.toggle, {
                    [styles.toggleOpen]: open,
                })}
                onClick={() => {
                    setOpen((o) => !o);
                }}
            >
                ☰ {!open ? "Menu" : "Close"}
            </button>
        </nav>
    );
}

interface AnchorLinkProps extends React.PropsWithChildren {
    isHomePage: boolean;
    anchor: string;
}

function AnchorLink({ children, anchor, isHomePage }: AnchorLinkProps) {
    if (isHomePage) {
        return <a href={`#${anchor}`}>{children}</a>;
    }
    return <Link href={`/#${anchor}`}>{children}</Link>;
}
