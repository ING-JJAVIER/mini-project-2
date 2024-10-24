'use client'
import React, { useState } from 'react'
import Aside from '@/components/Aside'
import MainCards from '@/components/mainCards'
import BaseData from '@/customHook/basedata'
import ArrayData from '@/server/arrayData'


export default function Home() {
  const [dataCities, setDataCities] = useState([]);



  return (
    <>
      <BaseData setDataCities={setDataCities} />
      <ArrayData dataCities={dataCities} />
      <div className='md:h-screen lg:h-screen lg:flex'>
        <Aside/>

        <MainCards />

      </div>
    </>
  )
}
