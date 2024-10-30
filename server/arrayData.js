
import { baseData } from '@/utilities/basedata';

export async function arrayData() {
  try {
    const dataCities = await baseData('')

    return (dataCities && dataCities.map((item) => {
      return {
        key: item.id,
        places: item
      };
    }));
  } catch (error) {
    console.error("Error fetching data: ", error);
    return []; 
  }
}

