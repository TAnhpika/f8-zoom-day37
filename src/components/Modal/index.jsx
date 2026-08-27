import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import styles from "./Modal.module.scss";
import clsx from "clsx";

function Modal({
    isOpen = false,
    onAfterOpen,
    onAfterClose,
    onRequestClose,
    closeTimeoutMS = 0,
    shouldCloseOnOverlayClick = true,
    shouldCloseOnEsc = true,
    className,
    bodyOpenClassName = "modal-open",
    htmlOpenClassName = "modal-open",
    overlayClassName,
    children,
}) {
    // useRef dùng để lưu một giá trị qua các lần render
    // mà không làm component render lại.
    const previousIsOpen = useRef(isOpen);

    // close animation
    const [isClosing, setIsClosing] = useState(false);
    const closeTimerRef = useRef(null);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        if (isOpen) setIsClosing(false);
        return clearTimeout(closeTimerRef.current);
    }, [isOpen]);

    // onAfterOpen
    useEffect(() => {
        if (isOpen) onAfterOpen?.();
    }, [isOpen, onAfterOpen]);

    // closeTimeoutMS
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleRequestClose = () => {
        if (isClosing) return;

        setIsClosing(true)

        closeTimerRef.current = setTimeout(() => {
            onRequestClose?.();
        }, closeTimeoutMS);
    };

    // shouldCloseOnEsc
    useEffect(() => {
        if (!shouldCloseOnEsc) return;

        const handle = (e) => {
            if (e.code === "Escape") handleRequestClose();
        };

        if (isOpen) document.addEventListener("keyup", handle);

        return () => document.removeEventListener("keyup", handle);
    }, [shouldCloseOnEsc, isOpen, onRequestClose, handleRequestClose]);

    // bodyOpenClassName
    useEffect(() => {
        document.body.classList.add(bodyOpenClassName);

        return () => document.body.classList.remove(bodyOpenClassName);
    }, [bodyOpenClassName]);

    // htmlOpenClassName
    useEffect(() => {
        document.documentElement.classList.add(htmlOpenClassName);

        return () =>
            document.documentElement.classList.remove(htmlOpenClassName);
    }, [htmlOpenClassName]);

    // onAfterClose
    useEffect(() => {
        if (previousIsOpen.current && !isOpen) onAfterClose?.();

        previousIsOpen.current = isOpen;
    }, [isOpen, onAfterClose]);

    // isOpen
    if (!isOpen) return null;

    return (
        <div className={clsx(styles.modal, isClosing && styles.closing)}>
            {/* className */}
            <div className={clsx(styles.content, className)}>
                {/* Close btn */}
                <button
                    className={styles.closeBtn}
                    onClick={handleRequestClose}
                >
                    &times;
                </button>

                {/* children */}
                <div className={clsx(styles.body)}>{children}</div>
            </div>

            {/* Overlay */}
            {/* shouldCloseOnOverlayClick */}
            {/* overlayClassName */}
            <div
                className={clsx(styles.overlay, overlayClassName)}
                onClick={() => {
                    if (shouldCloseOnOverlayClick) handleRequestClose();
                }}
            />
        </div>
    );
}

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onAfterOpen: PropTypes.func,
    onAfterClose: PropTypes.func,
    onRequestClose: PropTypes.func,
    closeTimeoutMS: PropTypes.number,
    shouldCloseOnOverlayClick: PropTypes.bool,
    shouldCloseOnEsc: PropTypes.bool,
    className: PropTypes.string,
    bodyOpenClassName: PropTypes.string,
    htmlOpenClassName: PropTypes.string,
    overlayClassName: PropTypes.string,
    children: PropTypes.node.isRequired,
};
export default Modal;
