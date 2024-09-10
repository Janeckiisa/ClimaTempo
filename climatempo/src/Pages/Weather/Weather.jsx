import { useContext } from "react";
import { StyledCard, StyledContainer, StyledFont, StyledIcon, StyledRow } from "./style";
import WeatherContext from "../../contexts/WeatherContext";
import SearchContext from "../../contexts/SearchContext";

function Weather() {
    const {
        icon,
        feelsLike,
        temp,
        maxTemp,
        minTemp,
        humidity,
        name,
        description
    } = useContext(WeatherContext);

    const { city } = useContext(SearchContext);

    return (
        <StyledContainer>
            <StyledCard>
                <StyledRow>
                    <StyledIcon src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                    <StyledFont style={{ fontSize: '5vh' }} color="white">{city}</StyledFont>
                </StyledRow>
                <StyledFont style={{ fontSize: '60px' }} color="white">{temp}°C</StyledFont>
                <StyledRow>
                    <StyledFont style={{ fontSize: '30px' }} color="white">{minTemp}°C / {maxTemp}°C</StyledFont>
                    <StyledFont style={{ fontSize: '50px' }} color="white">{name}</StyledFont>
                </StyledRow>
                <StyledRow>
                    <StyledFont style={{ fontSize: '20px' }} color="white">Feels Like: {feelsLike}°C</StyledFont>
                </StyledRow>
                <StyledRow>
                    <StyledFont style={{ fontSize: '20px' }} color="white">Description: {description}</StyledFont>
                </StyledRow>
                <StyledRow>
                    <StyledFont style={{ fontSize: '20px' }} color="white">Humidity: {humidity}%</StyledFont>
                </StyledRow>
            </StyledCard>
        </StyledContainer>
    )
}

export default Weather;