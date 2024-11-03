import React, { useState, useEffect } from 'react'
import CardsTime from './cardsTime'
import CardsData from './cardsData'


export default function MainCards({ humidity, visibility, airPress,
    windSpeed }) {

    return (
        <main className='flex flex-wrap justify-center w-full bg-[#100e1d] py-4 lg:w-9/12'>
            <section className=' w-10/12 mt-10'>

                <header className='flex justify-end items-center w-full text-white gap-3 mb-8'>

                    <button className=' w-8 h-8 rounded-full text-sm font-semibold bg-[#585676] focus-within:bg-white focus-within:text-black' type="button" value='°C'>°C</button>

                    <button className=' w-8 h-8 rounded-full text-sm font-semibold bg-[#585676] focus-within:bg-white focus-within:text-black' type="button" value='°F'>°F</button>

                </header>

                <div>
                    <CardsTime />
                </div>

                <div className='w-full mt-5 lg:ml-0'>

                    <h2 className='mb-3 text-white '>Today&apos;s Hightlights</h2>

                    <CardsData
                        humidity={humidity}
                        visibility={visibility}
                        airPress={airPress}
                        windSpeed={windSpeed}
                    />

                </div>

            </section>

        </main>
    )
}
