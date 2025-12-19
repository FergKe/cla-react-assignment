import { useEffect } from "react";
import useDarkMode from "../Stores/useDarkMode";

export default function DarkModeTheme({ children }) {
    const isDarkMode = useDarkMode((state) => state.isDarkMode)

    useEffect(() => {
        document.documentElement.classList.toggle('dark', isDarkMode)
    }, [isDarkMode])

    return <>{children}</>
}