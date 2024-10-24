'use server';
import React from 'react';
import BaseData from '../customHook/basedata';

async function ArrayData({ dataCities }) {
  
  if (!dataCities) {
    console.error('dataCities está indefinido');
    return null;
  }

  return (

    <div>

      {
        dataCities && dataCities?.map((item) => {
          const places = item;
          const key = item.id;
          console.log(places)

          return (
            <>
              <BaseData
                key={key}
                places={places}
              />
            </>
          )
        })
      }

    </div>
  )
}

export default ArrayData;