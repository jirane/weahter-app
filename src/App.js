import React,{useState} from 'react'
import fetchWeather from './api/fetchWeather';
import Footer from './components/footer'
import './App.scss';
function App() {
  const [query,setQuery] = useState('')
  const [weather,setWeather] = useState([])
async function search(e){
  if(e.key === 'Enter'){
    const data = await fetchWeather(query);
    setWeather(data)
    setQuery('')
  }
}
 
  return (
   
    <div className='app'>
       <div className="weather-app">
          <input type="text" placeholder='Enter your TimeZone Place' value={query} onChange={(e)=>setQuery(e.target.value) } onKeyDown={search}/>
          {weather.main &&( 
          <div className='weather-info'>
            <p className="weather-city">{weather.name}<sup className="country">{weather.sys.country}</sup></p>
            <p className='weather-deg'>{Math.round(weather.main.temp)}<sup>&#8451;</sup></p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
            <p className='description'>{weather.weather[0].description}</p>
          </div>
            )}
          <Footer />
      </div>
      
    </div>
 
  );
}

export default App;
