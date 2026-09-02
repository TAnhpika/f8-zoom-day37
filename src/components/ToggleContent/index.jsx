import useToggle from "@/hooks/useToggle";

export default function ToggleContent({ title, Component }) {
    const [isVisible, toggleVisible, setVisible] = useToggle(false);

    return (
        <div>
            <button onClick={toggleVisible}>
                {isVisible ? "Hide" : "Show"} {title}
            </button>
            <button onClick={() => setVisible(true)}>Force Show</button>

            {isVisible && (
                <div>
                    <Component />
                </div>
            )}
        </div>
    );
}
