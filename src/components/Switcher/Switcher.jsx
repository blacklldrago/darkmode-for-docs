import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../hooks/useDarkSide";



function Switcher(){
    const [colorTheme, setTheme] = useDarkSide()
    const[darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false)

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }
    return (
        <>
        
        <div>
            <DarkModeSwitch
                className="relative left-3"
                checked = {darkSide}
                onChange = {toggleDarkMode}
                size = {56}                
            />
            <h3 className="text-gray-800 dark:text-gray-300 pt-4 text-center font-[600]">{colorTheme == 'light' ? 'Dark mode' : 'Light mode'}</h3>
        </div>
        </>
    )
}
export default Switcher