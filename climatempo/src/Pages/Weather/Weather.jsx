import { StyledCard, StyledContainer, StyledFont, StyledIcon, StyledRow } from "./style";

function Weather() {
    //https://openweathermap.org/img/wn/10d@2x.png

    const icon = '10d'


    return(
        <StyledContainer>
            <StyledCard>
                <StyledRow>
                    <StyledIcon src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                    <StyledFont style={{fontSize: '80px'}}>São José dos pinhais</StyledFont>
                </StyledRow>
            </StyledCard>
        </StyledContainer>
    )
}

export default Weather;