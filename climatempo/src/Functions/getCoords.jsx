import axios from "axios";

async function getCoords(data){
    try{
        if(data.length > 0){
            const first = data[0];

            const latitude = first.lat;
            const longitude = first.lon;
            console.log('Lat: ', latitude);
            console.log('Lon: ', longitude);

            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)

            console.log(response.data);// temperatura em kelvin

            return response.data;
        }
    }
    catch(error)
    {
        console.error("Erro ao buscar dados: ", error)
    }
}

export default getCoords;