import clsx from "clsx";
import { Ref, forwardRef } from "react";
import styles from "./pageWrapper.module.css";

interface PageWrapperProps extends React.PropsWithChildren {
    className?: string;
    id?: string;
}

function PageWrapper({ children, className, id }: PageWrapperProps, ref: Ref<HTMLElement>) {
    return (
        <section className={clsx(styles.root, className)} id={id} ref={ref}>
            {children}
        </section>
    );
}

export default forwardRef(PageWrapper);
