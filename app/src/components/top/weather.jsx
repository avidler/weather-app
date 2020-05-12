import React from 'react'

import SunImg from "../../resources/images/sunny.png"

function Weather() {


    return(
        <div className="weather-container">
            <div className="weather-container-header">Location Name</div>
            <div className="weather-container-inner">
                <div className="weather-container-image"><img src={SunImg} alt="sun" /></div>
                <div className="weather-container-temperature">10</div>
            </div>
            <div className="weather-container-footer">Sunny</div>
        </div>

    )
}

export default Weather