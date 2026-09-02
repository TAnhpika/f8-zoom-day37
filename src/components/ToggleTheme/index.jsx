import useToggle from "@/hooks/useToggle";
import { useEffect } from "react";

export default function ToggleTheme() {
    const [isDark, toggleTheme] = useToggle(false);

    useEffect(() => {
        document.documentElement.dataset.theme = isDark ? "dark" : "light";
    }, [isDark]);

    return (
        <button onClick={toggleTheme}>
            {isDark ? "Light mode" : "Dark mode"}
        </button>
    );
}
