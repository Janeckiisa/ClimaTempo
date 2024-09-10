import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StyledButton, StyledContainer, StyledInput } from "./style";
import SearchContext from "../../contexts/SearchContext";
import WeatherContext from "../../contexts/WeatherContext";
import ThemeContext from "../../contexts/ThemeContext";
import { KelvinToCelsius } from "../../Functions/KelvinToCelsius";
import getCoords from "../../Functions/getCoords";
import getCity from "../../Functions/getCity";

function SearchForm() {
    const key = 'e509edbaa4d396c2f26a43f8b58da272';
    const {
        city, setCity,
        stateCode, setStateCode,
        countryCode, setCountryCode
    } = useContext(SearchContext);

    const {
        setIcon,
        setFeelsLike,
        setTemp,
        setMaxTemp,
        setMinTemp,
        setHumidity,
        setName,
        setDescription
    } = useContext(WeatherContext);

    const {card, button} = useContext(ThemeContext);

    const navigate = useNavigate();

    async function handlePost(event) {
        event.preventDefault();

        try {
            const cityData = await getCity(city, stateCode, countryCode, key);

            if (cityData.length > 0) {
                const first = cityData[0];
                const latitude = first.lat;
                const longitude = first.lon;

                const weatherData = await getCoords(latitude, longitude, key);

                setIcon(weatherData.weather[0].icon);
                setFeelsLike(KelvinToCelsius(weatherData.main.feels_like));
                setTemp(KelvinToCelsius(weatherData.main.temp));
                setMaxTemp(KelvinToCelsius(weatherData.main.temp_max));
                setMinTemp(KelvinToCelsius(weatherData.main.temp_min));
                setHumidity(weatherData.main.humidity);
                setName(weatherData.weather[0].main);
                setDescription(weatherData.weather[0].description);//coloar todos os sets em função separada

                console.log(`Temperatura agora em ${city}: `, KelvinToCelsius(weatherData.main.temp));

                navigate('/weather');
            }
            else
                console.log("Cidade não encontrada.");

        } catch (error) {
            console.error("Erro ao buscar dados: ", error)
        }
    }

    return (
        <StyledContainer onSubmit={handlePost} color={card}>
            <StyledInput
                placeholder="City*"
                required
                value={city}
                onChange={e => setCity(e.target.value)}
            />
            <StyledInput
                placeholder="State Code"
                value={stateCode}
                onChange={e => setStateCode(e.target.value)}
            />
            <StyledInput
                placeholder="Country Code"
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
            />
            <StyledButton color={button}>Search</StyledButton>
        </StyledContainer>
    )
}

export default SearchForm;