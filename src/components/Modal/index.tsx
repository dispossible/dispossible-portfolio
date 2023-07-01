import clsx from "clsx";
import { MouseEventHandler, ReactEventHandler, useCallback, useEffect, useMemo, useRef } from "react";
import styles from "./modal.module.css";

type ModalProps = {
    isOpen?: boolean;
    children?: React.ReactNode;
    onClose?: () => void;
};

export function Modal({ isOpen, children, onClose }: ModalProps) {
    const modalRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
        if (isOpen && modalRef.current && !modalRef.current.open) {
            modalRef.current.showModal();
        }
    }, [isOpen]);

    const onAnimEnd = useCallback(() => {
        if (!isOpen && modalRef.current) {
            modalRef.current.close();
        }
    }, [isOpen]);

    const dialogClasses = useMemo(() => {
        const arr = [styles.modal];
        if (!isOpen) arr.push(styles.isClosing);
        return arr;
    }, [isOpen]);

    const onCancel: ReactEventHandler<HTMLDialogElement> = useCallback(
        (e) => {
            e.preventDefault();
            onClose?.();
        },
        [onClose]
    );

    // Handle backdrop clicks
    const onClick: MouseEventHandler<HTMLDialogElement> = useCallback(
        ({ target }) => {
            if (target === modalRef.current) {
                onClose?.();
            }
        },
        [onClose]
    );

    // Handle backdrop clicks
    const onCross = useCallback(() => {
        onClose?.();
    }, [onClose]);

    return (
        <dialog ref={modalRef} onCancel={onCancel} onClick={onClick} className={clsx(dialogClasses)}>
            <div className={styles.container} onAnimationEnd={onAnimEnd}>
                {children}
                <button className={styles.close} onClick={onCross}>
                    ✖
                </button>
            </div>
        </dialog>
    );
}
