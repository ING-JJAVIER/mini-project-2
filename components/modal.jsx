
'use client'
import React,{useState} from "react";


export default function Modal({ modalClose, places,
}) {
    const [filData, setFilData] = useState([]);

    const handleSearch = (e) => {
        e.preventDefault();
        const data = places.filter(item =>
            item.city.toLowerCase().includes(city.toLowerCase()) ||
            item.country.toLowerCase().includes(country.toLowerCase())
        );
        console.log(data)
        setFilData(data);
    };

    return (
        <main className='absolute top-0 left-0 z-[2] w-full h-full bg-gradient-to-b from-[#003D5B] via-[#006C6F] to-[#2C5F2D] pt-4 px-4'>
            <section>
                <form onSubmit={handleSearch} className='flex justify-evenly items-end w-full h-full'>
                    <div>
                        <label className='text-white text-xs' htmlFor="country">
                            Search for Your country or city
                            <input id='country' className='w-10/12 h-6  outline-none pl-2 mt-1 text-slate-900 rounded-full shadow-lg' type='text' placeholder='example: Maienfeld Switzerland' />
                        </label>
                    </div >

                    <button className='w-16 h-6 text-white text-xs border shadow-lg rounded-full active:text-[.9rem] active:border-2 active:border-cyan-700' type="submit" onClick={modalClose}>Search</button>
                </form>

            </section>
        </main>
    )
}
