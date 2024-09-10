import { StyledCard, StyledContainer, StyledIcon } from "./style";

function Weather() {
    //https://openweathermap.org/img/wn/10d@2x.png


    return(
        <StyledContainer>
            <StyledCard>
                <StyledIcon src={`https://openweathermap.org/img/wn/01d@2x.png`} />
            </StyledCard>
        </StyledContainer>
    )
}

export default Weather;