import React from "react"

function ForecastDay(props) {
    const iconurl = "http://openweathermap.org/img/w/" + props.iconcode + ".png"
    
    return(
        <div className="forecastday-container">
 
                <div className="forecastday-container-image"><img src={iconurl} alt="weather icon"/></div>
                <div className="forecastday-container-text">{props.weather}</div>

        </div>

    )
}


export default ForecastDay