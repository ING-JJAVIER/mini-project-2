import { baseData } from "@/utilities/basedata";
import React, { useState } from "react";
import Image from "next/image";

export default function Modal({ modalClose, selectPlace, }) {
    const [filData, setFilData] = useState([]);
    const [search, setSearch] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setFilData([]); 
        try {
            const data = await baseData(search);
            setFilData(data);
        } catch (error) {
            console.error("Error fetching data: ", error);
            setFilData([]);
        }
    };

    const selecUser = (place) => {
        selectPlace(place);
        modalClose();
    }

    return (
        <main className='absolute top-0 left-0 z-[2] w-full h-screen bg-[#1e213a] pt-4 px-4'>
            <section>
                <form onSubmit={handleSearch} className='flex justify-evenly items-center w-full h-full'>
                    <div className="flex items-center w-6/12 h-8 px-1 border">
                        <figure className=" w-7 h-6">
                            <Image className="flex items-center" src={'/icons/search.svg'} width={54} height={54} alt="search icon" />
                        </figure>
                        <label className='w-full h-full text-white text-xs bg-transparent' htmlFor="places">
                            <input
                                id='places'
                                className='w-full h-full  outline-none text-slate-500 font-semibold bg-transparent '
                                type='text'
                                placeholder='Search location'
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </label>
                    </div >

                    <button className='w-20 h-8 text-white  shadow-lg active:text-[.9rem] bg-[#3c47e9]' type="submit">Search</button>
                </form>

                {
                    filData.length > 0 && (
                        <div className="grid place-content-center mt-5 ">
                            <ul className=' w-11/12 text-slate-600 font-semibold p-2 max-h-screen lg:max-h-full lg overflow-y-auto  border-slate-500 rounded-lg'>
                                {
                                    filData.map((place) => (
                                        <li className="flex items-center cursor-pointer hover:underline active:font-bold" key={place.id} onClick={() => selecUser(place)}>
                                            {place.name} ({place.country})
                                        </li>
                                       
                                    ))
                                }
                            </ul>
                        </div>
                    )
                }

            </section>
        </main>
    )
}