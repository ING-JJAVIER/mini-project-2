import React from 'react'
import Image from 'next/image'

export default function CardsTime() {
    return (
        <main id='cardTime' className='flex justify-evenly w-full h-full rounded-md'>
            <section className='grid grid-cols-2 md:grid-cols-5 lg:flex lg:flex-wrap gap-2'>

                <div className='flex flex-wrap justify-center w-24 h-32 p-3 bg-[#1e213a] rounded-lg'>

                    <h4 className='w-full h-4 text-white text-xs text-center'>Tommorrow</h4>
                    <figure className='flex justify-center w-full h-8'>
                        <Image className='w-6/12' src='/weather/03d.png' width={100} height={100} alt='cloud image' />
                    </figure>

                    <div className='flex justify-center items-end gap-2'>
                        <h5 className='text-white text-sm'>27 °C</h5>
                        <h5 className='text-[#a3a3b6] text-xs'>18 °C</h5>
                    </div>

                </div>

                <div className='flex flex-wrap justify-center w-24 h-32 p-3 bg-[#1e213a] rounded-lg'>

                    <h4 className='w-full h-4 text-white text-xs text-center'>Mond, 3 Jul</h4>
                    <figure className='flex justify-center w-full h-8'>
                        <Image className='w-6/12' src='/weather/03d.png' width={100} height={100} alt='cloud image' />
                    </figure>

                    <div className='flex justify-center items-end gap-2'>
                        <h5 className='text-white text-sm'>27 °C</h5>
                        <h5 className='text-[#a3a3b6] text-xs'>18 °C</h5>
                    </div>

                </div>

                <div className='flex flex-wrap justify-center w-24 h-32 p-3 bg-[#1e213a] rounded-lg'>

                    <h4 className='w-full h-4 text-white text-xs text-center'>Tue, 4 Jul</h4>
                    <figure className='flex justify-center w-full h-8'>
                        <Image className='w-6/12' src='/weather/03d.png' width={100} height={100} alt='cloud image' />
                    </figure>

                    <div className='flex justify-center items-end gap-2'>
                        <h5 className='text-white text-sm'>27 °C</h5>
                        <h5 className='text-[#a3a3b6] text-xs'>18 °C</h5>
                    </div>

                </div>

                <div className='flex flex-wrap justify-center w-24 h-32 p-3 bg-[#1e213a] rounded-lg'>

                    <h4 className='w-full h-4 text-white text-xs text-center'>Wed, 5 Jul</h4>
                    <figure className='flex justify-center w-full h-8'>
                        <Image className='w-6/12' src='/weather/03d.png' width={100} height={100} alt='cloud image' />
                    </figure>

                    <div className='flex justify-center items-end gap-2'>
                        <h5 className='text-white text-sm'>27 °C</h5>
                        <h5 className='text-[#a3a3b6] text-xs'>18 °C</h5>
                    </div>

                </div>

                <div className='flex flex-wrap justify-center w-24 h-32 p-3 bg-[#1e213a] rounded-lg'>

                    <h4 className='w-full h-4 text-white text-xs text-center'>Thu, 6 Jul</h4>
                    <figure className='flex justify-center w-full h-8'>
                        <Image className='w-6/12' src='/weather/03d.png' width={100} height={100} alt='cloud image' />
                    </figure>

                    <div className='flex justify-center items-end gap-2'>
                        <h5 className='text-white text-sm'>27 °C</h5>
                        <h5 className='text-[#a3a3b6] text-xs'>18 °C</h5>
                    </div>

                </div>

            </section>

        </main>
    )
}
