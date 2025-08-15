import React, { createContext , useState} from 'react';

export const WeatherData = createContext();

function WeatherUpdateContext({children}) {
     //setting up the states:
     const [weatherData, setWeatherData] = useState([]);

  return (
    <div>
      coming right up !
    </div>
  )
}

export default WeatherUpdateContext;
