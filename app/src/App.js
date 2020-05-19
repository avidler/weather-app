import React, {useEffect, useState} from 'react';

import './App.css';
import "./sass/app.scss";

import TopSection from './components/top/top'
import BottomSection from './components/bottom/bottom'

function App(props) {
  const [cityName, setCityName] = useState("London")
  const [numForecastDays, setNumForecastDays] = useState(5)

  const { eventEmitter } = props

  const [temp_c, setTemp_c] = useState(0)
  const [isDay, setIsDay] = useState(true)
  const [text, setText] = useState("")
  const [iconURL, setIconURL] = useState("")
  const [forecastDays, setForecastDays] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {

    async function getWeather () {
      const axios = require('axios')
      const params = {
        access_key: 'f69da7fad1f8310a6791869adc742c8c',
        query: cityName,
        forecast_days: numForecastDays
      }
      await axios.get('http://api.weatherstack.com/current', {params})
      .then(response => {
        const apiResponse = response.data;
        return apiResponse
      }).then((data) => {
        console.log("data forecast: ",data)
        setIsLoading(false)
        setTemp_c(data.current.temperature)
        setIsDay(data.current.is_day)
        setText(data.current.weather_descriptions[0])
        setIconURL(data.current.weather_icons[0])
        //setForecastDays(data.forecast)
        //console.log(temp_c, isDay, text, iconURL);
      }).catch(error => {
        console.log(error);
      });
    }

    getWeather()
  })

  eventEmitter.on("updateWeather", data => {
    setCityName(data)
    //console.log("Updating weather... LocationName:", data)
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
                                      eventEmitter={props.eventEmitter}
                                    />
        </div>}
        <div className="bottom-section"><BottomSection

                                      /></div>
      </div>
    </div>
  );
}

export default App;
