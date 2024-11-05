import Image from 'next/image'
import BarPorcent from './barPorcent'

export default function CardsData({ humidity, visibility, airPress, loading, windSpeed,windDirection, units }) {
  const windunit = units === 'metric' ? 'm/s' : 'mph'
  const pressure = units === 'metric' ? 'hPa' : 'psi'

  const deg = (degrees) => {
    if (degrees >= 337.5 || degrees < 22.5) return 'N'; 
    if (degrees >= 22.5 && degrees < 67.5) return 'NE';  
    if (degrees >= 67.5 && degrees < 112.5) return 'E';   
    if (degrees >= 112.5 && degrees < 157.5) return 'SE';  
    if (degrees >= 157.5 && degrees < 202.5) return 'S';   
    if (degrees >= 202.5 && degrees < 247.5) return 'SW';  
    if (degrees >= 247.5 && degrees < 292.5) return 'W';  
    if (degrees >= 292.5 && degrees < 337.5) return 'NW';
    return ''; 
  }

  return (
    <main id='cardsData' className='flex justify-evenly w-full h-full rounded-md'>

      <section className='grid grid-cols-1 md:grid-cols-2 gap-4 w-full'>


        {
          loading ? (
            <div className="flex items-center justify-center w-full h-full my-8 bg-transparent ">
              <div className="px-3 py-1 text-xs font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
                loading...
              </div>
            </div>
          ) : (
            <>
              <div className='flex flex-col items-center w-full h-32 p-3 bg-[#1e213a] rounded-lg'>

                <h4 className='w-full h-4 text-white text-xs text-center mb-4'>Wind Status</h4>

                <div className='flex justify-center items-end h-10 mb-4 gap-1'>
                  <h2 className='flex justify-center w-full text-white text-5xl'>
                    {windSpeed}
                  </h2>
                  <h2 className='flex justify-center w-full text-white text-4xl'>
                    {windunit}
                  </h2>
                </div>

                <div className='flex justify-center items-end gap-2'>
                  <figure className='grid place-content-center w-5 h-5 rounded-full bg-[#626475]'>
                    <Image 
                    className='w-3 transition-transform duration-300' 
                    src='/icons/navigation.svg' 
                    width={100} 
                    height={100} 
                    alt='arrow icon' 
                    style={{ transform: `rotate(${windDirection}deg)` }} />
                  </figure>
                  <h5 className='text-[#a3a3b6] text-xs'>{deg(windDirection)}</h5>
                </div>
              </div>

              <div className='flex flex-col items-center w-full h-32 p-3 bg-[#1e213a] rounded-lg'>

                <h4 className='w-full h-4 text-white text-xs text-center mb-4'>Humidity</h4>

                <div className='flex justify-center items-end h-10 mb-4 gap-1'>
                  <h2 className='flex justify-center w-full text-white text-5xl'>
                    {humidity}
                  </h2>
                  <h2 className='flex justify-center w-full text-white text-4xl'>
                    %
                  </h2>
                </div>

                <BarPorcent humidity={humidity} />

              </div>

              <div className='flex flex-col items-center w-full h-24 p-3 bg-[#1e213a] rounded-lg'>

                <h4 className='w-full h-4 text-white text-xs text-center mb-4'>Visibility</h4>

                <div className='flex justify-center items-end h-10 mb-4 gap-1'>
                  <h2 className='flex justify-center w-full text-white text-4xl'>
                    {visibility}
                  </h2>
                  <h2 className='flex justify-center w-full text-white text-2xl'>
                    km
                  </h2>
                </div>
              </div>

              <div className='flex flex-col items-center w-full h-24 p-3 bg-[#1e213a] rounded-lg'>

                <h4 className='w-full h-4 text-white text-xs text-center mb-4'>Air Pressure</h4>

                <div className='flex justify-center items-end h-10 mb-4 gap-1'>
                  <h2 className='flex justify-center w-full text-white text-4xl'>
                    {airPress}
                  </h2>
                  <h2 className='flex justify-center w-full text-white text-2xl'>
                    {pressure}
                  </h2>
                </div>

              </div>

            </>
          )

        }

      </section>

    </main>
  )
}
