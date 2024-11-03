'use client'
import React, { useEffect, useState } from 'react'
import Aside from '@/components/Aside'
import MainCards from '@/components/mainCards'
import { arrayData } from '@/server/arrayData'
import { baseWeather } from '@/utilities/baseWeather'

export default function Home() {
  const [weather, setWeather] = useState(null)

  useEffect(() => {

    const fetchWeather = async () => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const weatherData = await baseWeather({ lat: latitude, lon: longitude });
        setWeather(weatherData);
        console.log('data localizacion: ', weatherData)
      })

    }
    fetchWeather();

  }, []);

  arrayData()

  return (
    <>

      <div className='md:h-screen lg:h-screen lg:flex'>

        <Aside
          tempNow={weather?.tempNow || 0}
          date={weather?.date || 0}
          weatherMain={weather?.weather_main || 0}
          name={weather?.name || 0}
          country={weather?.country}
        />

        <MainCards
          humidity={weather?.humidity || 0}
          visibility={weather?.visibility || 0}
          airPress={weather?.airPress || 0}
          windSpeed={weather?.windSpeed || 0}
        />

      </div>
    </>
  )
}
