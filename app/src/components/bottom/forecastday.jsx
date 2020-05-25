import React, { useState } from "react"

function ForecastDay(props) {

    const [shown, setShown] = useState(false)

    function showToolTip(dayId) {
        setShown(true)
    }

    function hideToolTip(dayId) {
        setShown(false)
    }

    const iconurl = "http://openweathermap.org/img/w/" + props.iconcode + ".png"
     return(
        <div className="forecastday-container" onMouseEnter={() => showToolTip(props.dayId)} onMouseLeave={() => hideToolTip(props.dayId)}>
                {shown ? <span className="tooltiptext" id={props.dayId}>
                            {props.description}
                            <br /><br />Max Temp: {Math.round(props.temp_max)}°
                            <br />Humidity: {props.humidity}
                            <br />Pressure: {props.pressure}
                            <br />Wind Speed: {props.wind}
                        </span> 
                        : 
                        null
                }
                <div className="forecastday-container-date">{props.forecastDate}</div>
                <div className="forecastday-container-image"><img src={iconurl} alt="weather icon"/></div>
                <div className="forecastday-container-text">{props.weather}</div>

        </div>

    )
}


export default ForecastDay