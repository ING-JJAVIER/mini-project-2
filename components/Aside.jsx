import React from 'react'
import Image from 'next/image'

export default function Aside() {
    return (
        <main id='side' className='flex justify-center w-full'>
            <section className='flex justify-center w-8/12'>

                <header className='flex justify-between w-full'>
                    <button className='flex justify-center items-center w-32 h8 rounded-md text-white text-lg font-semibold' type="button">Search for Places</button>
                    
                    <button className='flex justify-center items-center w-32 h8 rounded-md text-white text-lg font-semibold' type="radio">
                        <figure>
                            <Image src={/icons/location} width={100} height={100} alt='icon location' />
                        </figure>
                    </button>
                </header>

                <article>
                    <div className='relative'>
                        <figure className='absolute z-[-1] top-0 left-0'>
                            <Image src={/weather/Cloud - background.png} width={300} height={200} alt='image clouds' />
                        </figure>

                        <figure className='absolute z-[0] top-0 left-0'>
                            <Image src={/weather/03d.png} width={200} height={200} alt='image cloud' />
                        </figure>
                    </div>

                    <div>

                        <div className='flex my-10'>
                            <h2 className='text-white text-xl font-semibold'>30</h2>{/* datos a cambiar por la api */}

                            <h2 className='text-white text-sm font-semibold'>°C</h2>{/* datos a cambiar por la api */}
                        </div>

                        <h2 className='text-white text-xs font-semibold mb-10'>Broken Clouds</h2> {/* datos a cambiar por la api */}

                        <div className='flex mb-5'>
                            <h5 className='text-white text-[.5rem] font-semibold'>today</h5>{/* datos a cambiar por la api */}

                            <h5 className='text-white text-[.5rem] font-semibold'>Sun, 2 Jul</h5>{/* datos a cambiar por la api */}
                        </div>

                        <h6 className='flex text-white text-[.5rem] font-semibold mr-2 h-4'>
                            <figure className='h-full'>
                                <Image className='h-ful' src='/icons/location_on.svg' width={100} height={100} alt='icon location'/>
                            </figure>
                            ubicacion</h6> {/* datos a cambiar por la api */}
                    </div>

                </article>

            </section>
        </main>
    )
}