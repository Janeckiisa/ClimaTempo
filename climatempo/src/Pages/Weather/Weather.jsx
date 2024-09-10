import { StyledCard, StyledContainer, StyledIcon } from "./style";

function Weather() {
    //https://openweathermap.org/img/wn/10d@2x.png

    const icon = '10d'


    return(
        <StyledContainer>
            <StyledCard>
                <StyledIcon src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                São José dos pinhais
            </StyledCard>
        </StyledContainer>
    )
}

export default Weather;