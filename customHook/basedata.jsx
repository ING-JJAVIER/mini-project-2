'use client'
import { useEffect } from 'react'
import axios from 'axios';

export default function BaseData({ setDataCities }) {

    useEffect(() => {
        axios.get('/cities.json')
            .then(rs => {
                const dataCities = rs.data.map((item) => ({
                    key: item.id,
                    country: item.country,
                    city: item.name,
                    Ccode: item.country_code,
                    lat:item.lat,
                    lon:item.lon
                }));
                setDataCities(dataCities);
            })
            .catch(error => console.error('Error al obtener datos:', error));
    }, [])
    return null;
}