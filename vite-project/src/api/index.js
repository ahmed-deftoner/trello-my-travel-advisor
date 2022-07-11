import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '8be2cecdefmsh5c58be4c558e036p1a1b4ejsn5e739ed12284',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlaceData = async () => {
    try{
        const {data: {data}} = await axios.get(URL,options);
        return data;
    }catch(error){
        console.log(error);
    }
}