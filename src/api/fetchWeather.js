import React from 'react'
import axios from 'axios';
const url = 'https://api.openweathermap.org/data/2.5/weather';
const key = '41794321bd3570ba5252c51c4f68ac88';

const fetchWeather = async(query) =>{
    const {data} =   await axios.get(url,{
        params:{
            q:query,
            units:'metric',
            APPID:key
        }
    })
    return data;
}
export default fetchWeather;