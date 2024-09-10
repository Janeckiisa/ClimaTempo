import { useContext } from "react";
import { StyledButton, StyledContainer, StyledInput } from "./style";
import SearchContext from "../../contexts/SearchContext";
import { KelvinToCelsius } from "../../Functions/KelvinToCelsius";
import getCoords from "../../Functions/getCoords";
import getCity from "../../Functions/getCity";

function SearchForm() {
    const key = 'e509edbaa4d396c2f26a43f8b58da272';
    const {city, setCity, stateCode, setStateCode, countryCode, setCountryCode} = useContext(SearchContext);

    async function handlePost(event){
        event.preventDefault();
        
        try{
            const cityData = await getCity(city, stateCode, countryCode, key);

            if(cityData.length > 0){
                const first = cityData[0];
                const latitude = first.lat;
                const longitude = first.lon;

                const weatherData = await getCoords(latitude, longitude, key);
                console.log(`Temperatura agora em ${city}: `, KelvinToCelsius(weatherData.main.temp_max))
            }
            console.log("Cidade não encontrada.");
            
        }catch(error){
            console.error("Erro ao buscar dados: ", error)
        }
    }

    return(
        <StyledContainer onSubmit={handlePost}>
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
            <StyledButton>Search</StyledButton>
        </StyledContainer>
    )
}

export default SearchForm;