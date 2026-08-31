import React from "react";
import styles from "./ExpensiveChild.module.scss";

const ExpensiveChild = ({ items }) => {
    console.log("ExpensiveChild re-render");

    const totalLength = items.reduce((total, item) => {
        return total + (item.name ? item.name.length : 0);
    }, 0);

    return (
        <div className={styles.wrapper}>
            <h3>ExpensiveChild:</h3>
            <br />
            <p>Total name length: {totalLength}</p>
            <br />
            <p>Item list:</p>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default React.memo(ExpensiveChild);
