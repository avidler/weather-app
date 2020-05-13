import React from 'react'
import Weather from './weather'

import './topStyle.scss'

function TopSection() {

    return(
        <div className="top-container">
            <div className="title">Weather Up</div>
            <Weather />
            <button className="btn btn-select-location">Select Location</button>
        </div>
    )
}

export default TopSection