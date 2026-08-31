import { useEffect, useRef, useState } from "react";
import styles from "./FocusDemo.module.scss";
import CustomInput from "@/components/CustomInput";

function FocusDemo() {
    const renderCountRef = useRef(0);
    const [renderCount, setRenderCount] = useState(0);

    const [val1, setVal1] = useState("");
    const [val2, setVal2] = useState("");

    const input1Ref = useRef(null);
    const input2Ref = useRef(null);

    // Mỗi lần gõ chữ vào input, state đổi -> component chạy lại -> biến này tự tăng.
    useEffect(() => {
        renderCountRef.current++;
        setRenderCount(renderCountRef.current);
    }, [val1, val2]);

    const handleFocus1 = () => {
        input1Ref.current?.focus(); // Gọi hàm focus() đã định nghĩa ở useImperativeHandle    }
    };

    const handleFocus2 = () => {
        input2Ref.current?.focus();
    };

    const handleClearBoth = () => {
        setVal1("");
        setVal2("");
        input1Ref.current?.blur();
        input2Ref.current?.blur();
    };

    const handleGetValues = () => {
        const value1 = input1Ref.current?.getValue();
        const value2 = input2Ref.current?.getValue();
        console.log(`Input 1 value: ${value1}\nInput 2 value: ${value2}`);
    };

    return (
        <div className={styles.wrapper}>
            <h2>Focus demo page</h2>
            <p>Số lền component re-render: {renderCount}</p>

            <CustomInput
                ref={input1Ref}
                label="Input 1:"
                placeholder="Nhập thông tin 1..."
                value={val1}
                onChange={(e) => setVal1(e.target.value)}
            />

            <CustomInput
                ref={input2Ref}
                label="Input 2:"
                placeholder="Nhập thông tin 2..."
                value={val2}
                onChange={(e) => setVal2(e.target.value)}
            />

            <div >
                <button onClick={handleFocus1}>Focus input 1</button>
                <button onClick={handleFocus2}>Focus input 2</button>
                <button onClick={handleClearBoth}>Clear both</button>
                <button onClick={handleGetValues}>Get values</button>
            </div>
        </div>
    );
}

export default FocusDemo;
