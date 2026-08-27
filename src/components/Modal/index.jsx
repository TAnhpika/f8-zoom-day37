import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
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
    // onAfterOpen
    useEffect(() => {
        if (isOpen) onAfterOpen?.();
    }, [isOpen, onAfterOpen]);

    // closeTimeoutMS
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleRequestClose = () => {
        setTimeout(() => {
            onRequestClose();
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
    // useRef dùng để lưu một giá trị qua các lần render
    // mà không làm component render lại.
    const previousIsOpen = useRef(isOpen);

    useEffect(() => {
        if (previousIsOpen.current && !isOpen) onAfterClose?.();

        previousIsOpen.current = isOpen;
    }, [isOpen, onAfterClose]);

    // isOpen
    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
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
