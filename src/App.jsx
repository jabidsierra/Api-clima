import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
import axios from 'axios';
import Weather from './components/weather.jsx'
const API_endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
const API_key = 'e4f956c131b0659993c97ae45bfc73b6';

function App() {
  
const [weatherData, setWeatherData] = useState ({})
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      
      let finalAPIEndPoint = `${API_endpoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_key}`;

    axios
    .get(finalAPIEndPoint)
    .then((resp)=> {
      setWeatherData(resp.data)
      console.log(resp.data)
    }) 
    })
    
  }, [])

  return (   
    <div className="App">
      <Weather locationData = {weatherData}/>
    </div>
  )
}

export default App
