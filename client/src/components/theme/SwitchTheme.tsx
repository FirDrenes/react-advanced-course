import { useCallback, useContext} from "react";
import { Theme, ThemeContext } from "../../contexts/ThemeContext";
import "./SwitchTheme.css";

export const SwitchTheme = () => {
    const {setTheme, theme} = useContext(ThemeContext);
    const handleChange = useCallback(() => {
        setTheme(t  => t === Theme.dark ? Theme.light : Theme.dark);
    }, [])

    return (
            <div className="switch-wrapper">
                <label className="switch">
                    <input type="checkbox" defaultChecked={theme === Theme.dark} onClick={handleChange} />
                    <span />
                    <strong>{theme}</strong>
                </label>
            </div>
    )
}