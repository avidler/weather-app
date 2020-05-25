import React, {useEffect, useState} from 'react';

import './App.css';
import "./sass/app.scss";

import TopSection from './components/top/top'
import BottomSection from './components/bottom/bottom'

function App(props) {
  const [cityName, setCityName] = useState("London")


  const { eventEmitter } = props

  const [temp_c, setTemp_c] = useState(0)
  const [text, setText] = useState("")
  const [iconURL, setIconURL] = useState("")
  const [forecastDays, setForecastDays] = useState([])

  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {

    async function getWeather () {
      const axios = require('axios')
      const params = {
        appid: 'f84cddc6b247326126f3ca0fcf0bc7cf',
        q: cityName,
        units: 'metric'
      }
      await axios.get('https://api.openweathermap.org/data/2.5/forecast', {params})
      .then(response => {
        const apiResponse = response.data;
        return apiResponse
      }).then((data) => {
        console.log("data forecast: ",data)
        setIsLoading(false)
        setTemp_c(Math.round(data.list[0].main.temp))
        //setIsDay(data.current.is_day)
        setText(data.list[0].weather[0].main)
        var iconcode = data.list[0].weather[0].icon;
        console.log("iconcode: ",iconcode)
        setIconURL("http://openweathermap.org/img/w/" + iconcode + ".png")
        //console.log("IconURL: ",iconURL)
        setForecastDays(data.list)
        //console.log("forecastDays: ", forecastDays);
      }).catch(error => {
        console.log(error);
      });
    }

    getWeather()
  }, [cityName])

  eventEmitter.on("updateWeather", data => {
    setCityName(data)
    console.log("Updating weather... LocationName:", data)
  })

  return (
    <div className="app-container">
      <div className="main-container">
        {isLoading && <h3>Loading Weather...</h3>}
        {!isLoading &&
        <>
        <div className="top-section"><TopSection 
                                      location={cityName} 
                                      temp_c={temp_c} 
                                      text={text} 
                                      iconURL={iconURL}
                                      eventEmitter={props.eventEmitter}
                                    />
        </div>
        <div className="bottom-section"><BottomSection
                                        forecastDays={forecastDays}
                                      /></div>
        </>
        }
      </div>
    </div>
  );
}

export default App;
