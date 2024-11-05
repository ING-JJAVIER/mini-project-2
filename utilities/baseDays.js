import apiKey from "@/api/apiWeather";

export async function baseDays({ lat, lon, units }) {

    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`)

        const data = await response.json();
        const days = {}

        data.list.forEach(item => {
            const date = new Date(item.dt * 1000).toLocaleDateString('en-EN', { weekday: 'long' });

            if (!days[date]) {
                days[date] = {
                    tempMin: item.main.temp_min,
                    tempMax: item.main.temp_max,
                    weatherIcon: item.weather[0].icon,
                    date: date,
                    count: 1
                };
            } else {
                days[date].tempMin = Math.min(days[date].tempMin, item.main.temp_min).toFixed(0);
                days[date].tempMax = Math.max(days[date].tempMax, item.main.temp_max).toFixed(0);
                days[date].count++;

            }
        });

        return Object.values(days).slice(1, 6);

    } catch (error) {
        console.error('Error al obtener datos:', error);
        return [];
    }
}