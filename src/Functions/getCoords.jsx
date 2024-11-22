import axios from "axios";

async function getCoords(lat, lon, key){
    try{
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`)
        return response.data;
    } catch(error){
        console.error("Erro ao buscar dados: ", error);
        throw error;
    }
}

export default getCoords;