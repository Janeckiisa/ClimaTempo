import { useContext } from "react";
import { StyledButton, StyledContainer, StyledInput } from "./style";
import SearchContext from "../../contexts/SearchContext";
import axios from "axios";
// import getCity from "../../Functions/getCity";
// import getCoords from "../../Functions/getCoords";

function SearchForm() {

    const key = 'e509edbaa4d396c2f26a43f8b58da272';

    const {city, setCity, stateCode, setStateCode, countryCode, setCountryCode} = useContext(SearchContext);

    async function handlePost(event){
        event.preventDefault();
        
        let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&appid=${key}`;

        if(stateCode == "" && countryCode == "")
            url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`

        try{
            const cidade = await axios.get(url)
            const data = cidade.data;

            console.log(data);//debug

            if(data.length > 0){
                const first = data[0];

                const latitude = first.lat;
                const longitude = first.lon;
                console.log('Lat: ', first.lat);
                console.log('Lon: ', first.lon);

                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)

                console.log(response.data);// temperatura em kelvin

                const newData = response.data;

                console.log(`Temperatura agora em ${city}: `, (newData.main.temp_max) - 273)
            }
        }
        catch(error)
        {
            console.error("Erro ao buscar dados: ", error)
        }
    }

    // const cityResponse = getCity(city, stateCode, countryCode, key);
    // const coordsResponse = getCoords(cityResponse, key);

    // console.log(cityResponse);
    // console.log(coordsResponse);

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