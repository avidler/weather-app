import React from 'react'



function Weather(props) {
    const { location, temp_c, text, iconURL} = props

    return(
        <div className="weather-container">
            <div className="weather-container-header">{location}</div>
            <div className="weather-container-inner">
                <div className="weather-container-image"><img src={iconURL} alt="sun" /></div>
                <div className="weather-container-temperature">{temp_c}°</div>
            </div>
            <div className="weather-container-footer">{text}</div>
        </div>

    )
}

export default Weather