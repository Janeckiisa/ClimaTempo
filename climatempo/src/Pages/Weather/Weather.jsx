import { useContext } from "react";
import { StyledCard, StyledContainer, StyledFont, StyledIcon, StyledRow } from "./style";
import WeatherContext from "../../contexts/WeatherContext";
import SearchContext from "../../contexts/SearchContext";

function Weather() {
    //https://openweathermap.org/img/wn/10d@2x.png
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

    const {
        city, 
        stateCode, 
        countryCode
    } = useContext(SearchContext);

    return(
        <StyledContainer>
            <StyledCard>
                <StyledRow>
                    <StyledIcon src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                    <StyledFont style={{fontSize: '80px'}} color="white">{city}</StyledFont>
                </StyledRow>
                <StyledRow>
                    <StyledFont>{temp}°</StyledFont>
                </StyledRow>
            </StyledCard>
        </StyledContainer>
    )
}

export default Weather;