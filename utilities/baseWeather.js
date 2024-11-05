import apiKey from "@/api/apiWeather";

export async function baseWeather({ lat, lon, units }) {


    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`)

        const data = await response.json();
    
        const timestamp = data.dt;
        const newDate = new Date(timestamp * 1000);
        const date = newDate.toLocaleDateString('en-EN', { weekday: 'long', month: 'long', day: 'numeric' });

        return {
            tempNow: data.main.temp.toFixed(0),
            weather_main: data.weather[0].main,
            humidity: data.main.humidity,
            visibility: data.visibility,
            airPress: data.main.pressure,
            windSpeed: data.wind.speed,
            windDirection:data.wind.deg,
            date: date,
            name: data.name,
            country: data.sys.country
        }

    } catch (error) {
        console.error('Error al obtener datos:', error);
        return [];
    }
}