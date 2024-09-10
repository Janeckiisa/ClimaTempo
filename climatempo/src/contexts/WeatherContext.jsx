import { createContext, useState } from "react";

const WeatherContext = createContext();

export const WeatherContextProvider = ({children}) => {
    const [icon, setIcon] = useState('');
    const [feelsLike, setFeelsLike] = useState(0.0);
    const [maxTemp, setMaxTemp] = useState(0);
    const [minTemp, setMinTemp] = useState(0);
    const [humidity, setHumidity] = useState(0);
}