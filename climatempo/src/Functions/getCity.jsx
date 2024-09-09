import axios from "axios";

async function getCity(city, stateCode, countryCode, key){
    
    let url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&appid=${key}`;

    if(stateCode == "" && countryCode == "")
        url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}`

    try{
        const city = await axios.get(url)
        const data = city.data;

        return data;
    }
    catch(error)
    {
        console.error("Erro ao buscar dados: ", error)
    }
}

export default getCity;