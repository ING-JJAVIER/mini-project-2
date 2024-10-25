'use server';
import React from 'react';
import { baseData } from '@/customHook/basedata';
import Modal from '@/components/modal';


async function ArrayData() {

  const dataCities = await baseData()

  return (

    <div>

      {

        dataCities && dataCities?.map((item) => {
          const places = item;
          const key = item.id;
          console.log(places)

          return (
            <Modal places={places} />
          )
        })
      }

    </div>
  )
}

export default ArrayData;