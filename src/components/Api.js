import axios from 'axios';

const url = "https://api.covid19india.org/data.json";

export const fectchData = async () =>{
    try {
        const {data} = await axios.get(url);
        const modifiedData={
            confirmed:data.statewise[0].confirmed,
            active:data.statewise[0].active,
            recovered:data.statewise[0].recovered,
            deaths:data.statewise[0].deaths,
            
        }
        return modifiedData ;
    } catch (error) {
        
    }
}