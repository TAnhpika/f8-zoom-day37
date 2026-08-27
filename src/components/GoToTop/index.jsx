import styles from "./GoToTop.module.scss";

import { useEffect, useState } from "react";

function GoToTop() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 300);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (!showButton) return null;

    return (
        <div className={styles.wrapper}>
            <button onClick={handleGoToTop} aria-label="Go to top">⬆️</button>
        </div>
    );
}

export default GoToTop;
