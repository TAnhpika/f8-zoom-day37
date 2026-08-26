import styles from "./Dropdown.module.scss";

function Dropdown({
    minWidth = 600,
    maxHeight = 500,
    position = "center",
    onClose,
    children,
}) {
    const positionStyles = {
        center: {
            left: "50%",
            transform: "translateX(-50%)",
        },
        right: {
            right: "0",
        },
    };
    return (
        <>
        
            <div className={styles.overlay} onClick={onClose}/>
            {/* ... : (spread) dùng để trải nhiều thuộc tính css */}
            <div
                className={styles.wrapper}
                style={{ minWidth, maxHeight, ...positionStyles[position] }}
            >
                {children}
            </div>
        </>
    );
}

export default Dropdown;
