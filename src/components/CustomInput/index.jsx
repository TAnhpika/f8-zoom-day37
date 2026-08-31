import { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = forwardRef(
    ({ label, placeholder, value, onChange }, ref) => {
        const inputRef = useRef();

        useImperativeHandle(ref, () => {
            return {
                focus() {
                    inputRef.current.focus();
                },
                blur() {
                    inputRef.current.blur();
                },
                getValue: () => {
                    return inputRef.current.value;
                },
            };
        });
        return (
            <div>
                {label && <label>{label}</label>}
                <input
                    type="text"
                    ref={inputRef}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            </div>
        );
    },
);

export default CustomInput;
