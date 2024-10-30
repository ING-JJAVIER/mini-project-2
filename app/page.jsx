'use client'
import React from 'react'
import Aside from '@/components/Aside'
import MainCards from '@/components/mainCards'
import {arrayData} from '@/server/arrayData'

export default function Home() {

  arrayData()
  return (
    <>
     
      <div className='md:h-screen lg:h-screen lg:flex'>
     
        <Aside />

        <MainCards />

      </div>
    </>
  )
}
