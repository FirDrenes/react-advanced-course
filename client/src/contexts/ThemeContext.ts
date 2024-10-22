import { createContext, Dispatch } from "react";

export enum Theme {
    dark = 'dark',
    light = 'light'
}

export const ThemeContext = createContext<{
    theme: Theme,
    setTheme: Dispatch<React.SetStateAction<Theme>>
}>({
    theme: Theme.dark,
    setTheme: () => undefined!
});