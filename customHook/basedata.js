
export default async function baseData() {

    try {
        const data = await fetch('/cities.json')
        if (!response.ok) {
            console.error('Error en la respuesta:', response.statusText);
            return [];
        }
        const countries = await data.json()
        console.log('Datos extraídos:', countries)

        return countries.map((item) => ({
            key: item.id,
            country: item.country,
            city: item.name,
            Ccode: item.country_code,
            lat: item.lat,
            lon: item.lon
        }));

    } catch (error) {
        console.error('Error al obtener datos:', error);
        return [];
    }
}