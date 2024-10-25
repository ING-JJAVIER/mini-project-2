'use client'
import React from 'react'
import Aside from '@/components/Aside'
import MainCards from '@/components/mainCards'

export default function Home() {
  

  return (
    <>
     
      <div className='md:h-screen lg:h-screen lg:flex'>
        <Aside/>

        <MainCards />

      </div>
    </>
  )
}
