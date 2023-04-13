import React, { useState } from 'react';


const Weather = ({locationData}) => {
    const [celcius, setCelsius] = useState(true)
    console.log(locationData.name)

  return (
    <div className="card">
      <div className="icon"><img src={`/${locationData.weather?.[0].icon}.svg`} alt="" className="icon"/></div>
      <div className="info">
        <div className="location">
          {locationData.name}, {locationData.sys?.country}
        </div>
        <div className="temperature">
        { celcius ? `${(locationData.main?.temp - 273.5).toFixed(0)}°` : `${((locationData.main?.temp - 273.5) * 9 / 5 + 32).toFixed(0)}°`}
        <span className="span">{ celcius ? "C" : "F" }</span>
        </div>
        <button className="button" onClick={ () => setCelsius(!celcius)}>{celcius ? "Cambiar a F°" : "Cambiar a C°"}</button>
      </div>
    </div>
  );
};

export default Weather;