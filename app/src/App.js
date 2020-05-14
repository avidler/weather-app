import React, {useEffect, useState} from 'react';

import './App.css';
import "./sass/app.scss";

import TopSection from './components/top/top'
import BottomSection from './components/bottom/bottom'

function App() {
  const cityName = "Helsinki"
  const forecastDays = 5
  const [temp_c, setTemp_c] = useState(0)
  const [isDay, setIsDay] = useState(true)
  const [text, setText] = useState("")
  const [iconURL, setIconURL] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {

    async function getWeather () {
      const axios = require('axios')
      const params = {
        access_key: 'f69da7fad1f8310a6791869adc742c8c',
        query: cityName,
        forecastDays
      }
      await axios.get('http://api.weatherstack.com/current', {params})
      .then(response => {
        const apiResponse = response.data;
        return apiResponse
      }).then((data) => {
        console.log("data: ",data)
        setIsLoading(false)
        setTemp_c(data.current.temperature)
        setIsDay(data.current.is_day)
        setText(data.current.weather_descriptions[0])
        setIconURL(data.current.weather_icons[0])
        console.log(temp_c, isDay, text, iconURL);
      }).catch(error => {
        console.log(error);
      });
    }

    getWeather()
  })

  return (
    <div className="app-container">
      <div className="main-container">
        {isLoading && <h3>Loading Weather...</h3>}
        {!isLoading &&
        <div className="top-section"><TopSection 
                                      location={cityName} 
                                      temp_c={temp_c} 
                                      isDay={isDay} 
                                      text={text} 
                                      iconURL={iconURL}
                                    />
        </div>}
        <div className="bottom-section"><BottomSection /></div>
      </div>
    </div>
  );
}

export default App;
