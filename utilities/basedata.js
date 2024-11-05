import cities from '@/public/cities.json'

export async function baseData(value) {
    try {
        const data = cities.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase()) ||
            item.country.toLowerCase().includes(value.toLowerCase()))

        return data.slice(0, 15)

    } catch (error) {
        console.error('Error al obtener datos:', error);
        return [];
    }
}