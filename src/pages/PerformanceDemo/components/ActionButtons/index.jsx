import styles from "./ActionButtons.module.scss";

import { memo } from "react";

const ActionButtons = memo(({ onIncrement, onReset }) => {
    console.log("Render ActionButtons");

    return (
        <div className={styles.wrapper}>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onReset}>Reset</button>
        </div>
    );
});

export default ActionButtons;
