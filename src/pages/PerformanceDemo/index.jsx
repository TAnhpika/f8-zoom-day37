import styles from "./PerformanceDemo.module.scss";

import { useCallback, useEffect, useState } from "react";
import CounterDisplay from "./components/CounterDisplay";
import ActionButtons from "./components/ActionButtons";
import ExpensiveChild from "./components/ExpensiveChild";

function PerformanceDemo() {
    console.log("PerformanceDemo re-render");

    const [count, setCount] = useState(0);
    const [name, setName] = useState("Anhpika");
    const [items, setItems] = useState([]);

    const handleIncrement = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);

    const handleReset = useCallback(() => {
        setCount(0);
    }, []);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    const handleChangeName = () => {
        console.log("Name changed");

        setName("Anhpika " + Math.floor(Math.random() * 100));
    };

    const handleAddItem = () => {
        const newItem = { name: "Item " + Math.floor(Math.random() * 1000) };
        setItems((prevItems) => [...prevItems, newItem]);
    };
    return (
        <div className={styles.wrapper}>
            <h1>PerformanceDemo:</h1>
            <br />
            <CounterDisplay count={count} />
            <ActionButtons
                onIncrement={handleIncrement}
                onReset={handleReset}
            />

            <br />
            <p>Current name: {name}</p>
            <button onClick={handleChangeName}>Change name</button>
            <button onClick={handleAddItem}>Add item</button>

            <ExpensiveChild items={items} />
        </div>
    );
}

export default PerformanceDemo;
