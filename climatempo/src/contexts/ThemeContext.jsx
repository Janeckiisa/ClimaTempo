import { createContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [icon, setIcon] = useState("/Dark.png");
    const [button, setButton] = useState("");
    const [bg, setBg] = useState("#fff");
    const [header, setHeader] = useState("#80bed1");
    const [card, setCard] = useState("#79a8d1");

    return(
        <ThemeContext.Provider value={{
            icon, setIcon,
            button, setButton,
            bg, setBg,
            header, setHeader,
            card, setCard
        }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;