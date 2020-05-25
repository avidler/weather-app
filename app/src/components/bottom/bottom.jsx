import React from 'react'

import "./bottomStyle.scss"

import Forecastday from "./forecastday"

function BottomSection(props) {

    const forecastList = props.forecastDays
    console.log("forecastList: ", forecastList)
    return(
        <div className="bottom-container">
            <div className="bottom-container-header">5-day forecast</div>
            <div className="bottom-inner-container tooltip">
            
            {
            forecastList.map((day, idx) => {
                var timeCheck = day.dt_txt.slice(day.dt_txt.length-8)
                var iconcode = day.weather[0].icon;
                var dayId = day.dt
                var forecastDate = day.dt_txt.slice(8, 10)+"/"+day.dt_txt.slice(5, 7);
                var temp_max = day.main.temp_max
                var humidity = day.main.humidity
                var pressure = day.main.pressure
                var description = day.weather[0].description
                var wind = day.wind.speed
                if (timeCheck === "12:00:00"){
                    return (
                        <Forecastday 
                            iconcode={iconcode} 
                            weather={day.weather[0].main} 
                            description={description}
                            dayId={dayId}
                            temp_max={temp_max} 
                            forecastDate={forecastDate}
                            key={idx}
                            humidity={humidity}
                            pressure={pressure}
                            wind={wind}
                        />
                    )
                   
                    
    }
    else{return<></>}
})

            }
           
           </div>
        </div>
    )
}

export default BottomSection