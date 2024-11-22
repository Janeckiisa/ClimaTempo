import { createContext, useState } from "react";

const SearchContext = createContext();

export const SearchContextProvider = ({children}) => {
    const [city, setCity] = useState("");
    const [stateCode, setStateCode] = useState("");
    const [countryCode, setCountryCode] = useState("");

    return(
        <SearchContext.Provider value={{
            city, setCity,
            stateCode, setStateCode,
            countryCode, setCountryCode
        }}>
            {children}
        </SearchContext.Provider>
    )
}

export default SearchContext;