import React from 'react'
import Image from 'next/image'
import BarPorcent from './barPorcent'

export default function CardsData() {
  return (
    <main id='cardsData' className='flex justify-evenly w-full h-full rounded-md'>
      
      
      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>
        
        
        <div className='flex flex-col items-center w-full h-32 p-3 bg-[#1e213a] rounded-lg'>

          <h4 className='w-full h-4 text-white text-xs text-center mb-4'>Wind Status</h4>

          <div className='flex justify-center items-end h-10 mb-4 gap-1'>
            <h2 className='flex justify-center w-full text-white text-5xl'>
              5.39
            </h2>
            <h2 className='flex justify-center w-full text-white text-4xl'>
              ms
            </h2>
          </div>

          <div className='flex justify-center items-end gap-2'>
            <figure className='grid place-content-center w-5 h-5 rounded-full bg-[#626475]'>
              <Image className='w-3' src='/icons/navigation.svg' width={100} height={100} alt='arrow icon' />
            </figure>
            <h5 className='text-[#a3a3b6] text-xs'>NW</h5>
          </div>


        </div>


        <div className='flex flex-col items-center w-full h-32 p-3 bg-[#1e213a] rounded-lg'>

          <h4 className='w-full h-4 text-white text-xs text-center mb-4'>Humidity</h4>

          <div className='flex justify-center items-end h-10 mb-4 gap-1'>
            <h2 className='flex justify-center w-full text-white text-5xl'>
              51
            </h2>
            <h2 className='flex justify-center w-full text-white text-4xl'>
              %
            </h2>
          </div>

          <BarPorcent />

        </div>


        <div className='flex flex-col items-center w-full h-24 p-3 bg-[#1e213a] rounded-lg'>

          <h4 className='w-full h-4 text-white text-xs text-center mb-4'>Visibility</h4>

          <div className='flex justify-center items-end h-10 mb-4 gap-1'>
            <h2 className='flex justify-center w-full text-white text-4xl'>
              16093.40
            </h2>
            <h2 className='flex justify-center w-full text-white text-2xl'>
              km
            </h2>
          </div>
        </div>

        <div className='flex flex-col items-center w-full h-24 p-3 bg-[#1e213a] rounded-lg'>

          <h4 className='w-full h-4 text-white text-xs text-center mb-4'>Air Presure</h4>

          <div className='flex justify-center items-end h-10 mb-4 gap-1'>
            <h2 className='flex justify-center w-full text-white text-4xl'>
              1008
            </h2>
            <h2 className='flex justify-center w-full text-white text-2xl'>
              mb
            </h2>
          </div>
        </div>

      </section>
    </main>
  )
}
