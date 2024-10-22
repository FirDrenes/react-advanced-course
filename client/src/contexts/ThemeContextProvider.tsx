import { useMemo, useState } from "react"
import { Theme, ThemeContext } from "./ThemeContext";

export const ThemeContextProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState(Theme.dark);
    const values = useMemo(() => ({
        theme,
        setTheme
    }), [theme]);
    return (
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}