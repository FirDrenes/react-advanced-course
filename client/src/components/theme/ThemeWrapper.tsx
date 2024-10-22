import { useContext } from "react"
import { Theme, ThemeContext } from "../../contexts/ThemeContext";

export const ThemeWrapper = ({children}: {children: React.ReactNode}) => {
    const {theme} = useContext(ThemeContext);
    return (
    <div className={['page-wrapper', theme === Theme.dark ? 'dark-theme' : 'light-theme'].join(' ')}>
        {children}
    </div>)
}