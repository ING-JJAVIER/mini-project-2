import React from 'react'
import Image from 'next/image'
import MainCards from './mainCards'

export default function Aside() {
    return (
        <main id='side' className='flex flex-wrap w-full bg-[#1e213a] lg:w-3/12'>
            <section className='flex justify-center w-full'>

                <article className='flex flex-wrap  w-full '>
                    <div className='flex justify-between w-full h-12 px-5 pt-5'>
                        <button className='flex justify-center items-center w-32 h-6  text-white text-xs font-semibold border rounded-md bg-[#6e707a] hover:bg-white hover:bg-opacity-50 active:text-sm' type="button">Search for Places</button>

                        <button className='flex justify-center items-center w-6 h-6  text-white text-lg font-semibold border rounded-full hover:bg-white hover:bg-opacity-35 active:border-lime-600' type="button">
                            <figure className='w-full h-full flex justify-center items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-42v-80q-125-14-214.5-103.5T122-440H42v-80h80q14-125 103.5-214.5T440-838v-80h80v80q125 14 214.5 103.5T838-520h80v80h-80q-14 125-103.5 214.5T520-122v80h-80Zm40-158q116 0 198-82t82-198q0-116-82-198t-198-82q-116 0-198 82t-82 198q0 116 82 198t198 82Zm0-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T560-480q0-33-23.5-56.5T480-560q-33 0-56.5 23.5T400-480q0 33 23.5 56.5T480-400Zm0-80Z" /></svg>
                            </figure>
                        </button>
                    </div>

                    <div className='relative h-40 md:h-72 lg:h-40 w-full'>
                        <figure className='absolute z-[0] top-0 left-0 w-full h-full'>
                            <Image className='w-full h-full object-fill opacity-5' src='/Cloud-background.png' width={200} height={200} alt='image clouds' />
                        </figure>

                        <figure className='absolute z-[1] top-1/3 left-24  md:top-1/3 md:left-56 lg:top-1/3 lg:left-1/3'>
                            <Image className='w-24 md:w-40 lg:w-20' src='/weather/03d.png' width={50} height={50} alt='image cloud' />
                        </figure>
                    </div>

                    <div className='flex flex-col justify-center w-full lg:justify-start'>
                        <div className='flex justify-center items-end w-full gap-1'>

                            <h2 className=' text-white text-5xl font-semibold'>30</h2>
                            <h2 className='text-xl text-[#a3a3b6] font-semibold'>°C</h2>
                        </div>

                        <h2 className='text-[#a3a3b6] text-xs font-semibold my-8 mx-auto '>Broken Clouds</h2>

                        <div className='flex mb-5 gap-4 mx-auto '>
                            <h5 className='text-[#a3a3b6]  text-[.5rem] font-semibold  '>today</h5>

                            <h5 className='text-[#a3a3b6] text-[.5rem] font-semibold  '>Sun, 2 Jul</h5>
                        </div>


                        <h6 className='flex justify-center items-center text-[#a3a3b6] text-[.5rem] font-semibold font-mono gap-1 h-6 mb-10'>
                            <figure className='h-full'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>

                            </figure>
                            ubicacion</h6>
                    </div>

                </article>

            </section>
        </main>
    )
}