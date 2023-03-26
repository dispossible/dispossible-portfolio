import clsx from "clsx";
import styles from "./pageWrapper.module.css";

interface PageWrapperProps extends React.PropsWithChildren {
    className?: string;
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
    return <section className={clsx(styles.root, className)}>{children}</section>;
}
