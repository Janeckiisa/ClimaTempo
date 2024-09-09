import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [icon, setIcon] = useState("");
    const [bg, setBg] = useState("");

    return(
        <ThemeContext.Provider value={{
            icon, setIcon,
            bg, setBg
        }}>
            {children}
        </ThemeContext.Provider>
    )
}