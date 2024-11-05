'use client'
import React, { useEffect, useState } from 'react'
import Aside from '@/components/Aside'
import MainCards from '@/components/mainCards'
import { arrayData } from '@/server/arrayData'
import { baseWeather } from '@/utilities/baseWeather'
import { baseDays } from '@/utilities/baseDays'

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [days, setDays] = useState([]);
  const [units, setUnits] = useState('metric'); 

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        const weatherData = await baseWeather({ lat: latitude, lon: longitude,units: units });
        const daysData = await baseDays({ lat: latitude, lon: longitude,units: units  })
        setWeather(weatherData);
        setDays(daysData)
        setLoading(false);
      })
      
    }
    
    fetchWeather();
  }, [units]);

  const unitsChange = (units) => {
    setUnits(units);
    
  };

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
          setLoading={setLoading}
          loading={loading}
          days={days}
        />

        <MainCards
          humidity={weather?.humidity || 0}
          visibility={weather?.visibility || 0}
          airPress={weather?.airPress || 0}
          windSpeed={weather?.windSpeed || 0}
          windDirection={weather?.windDirection}
          loading={loading}
          days={days}
          units={units}
          onUnitChange={unitsChange}
        />

      </div>
    </>
  )
}
