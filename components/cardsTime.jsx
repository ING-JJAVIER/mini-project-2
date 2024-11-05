import React from 'react'
import Image from 'next/image'

export default function CardsTime({ days, units, loading }) {
    const tempUnit = units === 'metric' ? '°c' : '°F';


    return (

        <main id='cardTime' className='flex justify-evenly w-full h-full rounded-md'>
            <section className='grid grid-cols-2 md:grid-cols-5 lg:flex lg:flex-wrap gap-4 md:gap-10 lg:gap-10'>


                {
                    loading ? (
                        <div className="flex items-center justify-center w-full h-full my-8 bg-transparent ">
                            <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                                loading...
                            </div>
                        </div>
                    ) : (
                        days.map((day, index) => (
                            <div key={index} className='flex flex-wrap justify-center w-28 h-32 p-3 bg-[#1e213a] rounded-lg'>

                                <h4 className='w-full h-4 text-white text-xs text-center'>{day.date}</h4>
                                <figure className='flex justify-center w-full '>
                                    <Image className='w-6/12' src={`/weather/${day.weatherIcon}.png`} width={100} height={100} alt='cloud image' />
                                </figure>

                                <div className='flex justify-center items-end gap-2'>
                                    <h5 className='text-white text-[1.2rem] w-full'>{day.tempMax}{tempUnit}</h5>
                                    <h5 className='text-[#a3a3b6] text-[.8rem] w-full'>{day.tempMin} {tempUnit}</h5>
                                </div>

                            </div>
                        ))

                    )
                }

            </section>

        </main >

    )
}
