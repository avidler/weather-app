import React from 'react'

import "./bottomStyle.scss"

import Forecastday from "./forecastday"

function BottomSection(props) {

    const forecastList = props.forecastDays
    console.log("forecastList: ", forecastList)
    return(
        <div className="bottom-container">
                  <div className="bottom-inner-container">
            {
            forecastList.map((day, idx) => {
                var timeCheck = day.dt_txt.slice(day.dt_txt.length-8)
                var iconcode = day.weather[0].icon;
                
                if (timeCheck === "12:00:00"){
                    return <Forecastday iconcode={iconcode} weather={day.weather[0].main} key={idx}/>
    }
    else{return<></>}
})

            }
           
           </div>
        </div>
    )
}

export default BottomSection