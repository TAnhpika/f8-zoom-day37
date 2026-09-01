import React, { useMemo } from "react";
import styles from "./ExpensiveChild.module.scss";

const ExpensiveChild = ({ items }) => {
    console.log("ExpensiveChild re-render");

    const totalLength = items.reduce((total, item) => {
        return total + (item.name ? item.name.length : 0);
    }, 0);

    // k useMemo - tính lại sau mỗi lần component cha re-render
    // Tính toán nặng: tìm item có tên dài nhất
    // function expensiveCalculation() {
    //     console.log("Calculating longest name...");
    //     let longest = "";
    //     items.forEach((item) => {
    //         // Thêm delay giả lập tính toán nặng
    //         for (let i = 0; i < 3e8; i++) {
    //             /* empty */
    //         }
    //         if (item.name.length > longest.length) {
    //             longest = item.name;
    //         }
    //     });
    //     return longest;
    // }

    // useMemo - tính toán lại chỉ khi dependencies thay đổi
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating longest name...");
        let longest = "";
        items.forEach((item) => {
            // Thêm delay giả lập tính toán nặng
            for (let i = 0; i < 3e8; i++) {
                /* empty */
            }
            if (item.name.length > longest.length) {
                longest = item.name;
            }
        });
        return longest;
    }, [items])

    return (
        <div className={styles.wrapper}>
            <h3>ExpensiveChild:</h3>
            <br />
            <p>Total name length: {totalLength}</p>
            <br />
            {/* <p>Longest name: {expensiveCalculation()}</p> */}
            <p>Longest name: {expensiveCalculation}</p>
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

// Bỏ React.memo để test trường hợp ExpensiveChild luôn re-render khi PerformanceDemo re-render
// export default ExpensiveChild;
