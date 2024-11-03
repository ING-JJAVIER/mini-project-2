import React from 'react'

export default function BarPorcent({humidity}) {
    
    return (
        <div className='w-full'>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-4 dark:bg-gray-700">
                <div className="bg-blue-600 h-3 text-[.5rem] font-medium text-blue-500 text-center p-0.5 leading-none rounded-full dark:bg-[#ffec65]" style={{width: `${humidity}%`}}>{humidity}</div>
            </div>
        </div>
    )
}
