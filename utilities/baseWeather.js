import apiKey from "@/api/apiWeather";
import { baseData } from "./basedata";

export async function baseWeather({lat,lon}) {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)

        const data = await response.json();

        const timestamp = data.dt;
        const newDate = new Date(timestamp * 1000);
        const date = newDate.toLocaleDateString('en-EN', {weekday:'long', month: 'long', day: 'numeric'});

        return {
            temp: data.main.temp,
            weather_main: data.weather[0].main,
            humidity: data.main.humidity,
            visibility: data.visibility,
            air_pressure: data.main.pressure,
            wind_speed: data.wind.speed,
            date:date,
            name:data.name,
            
        }

    } catch (error) {
        console.error('Error al obtener datos:', error);
        return [];
    }
}