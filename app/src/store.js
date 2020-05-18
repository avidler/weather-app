import React from 'react'

import { EventEmitter } from "events"

function Store(props) {
    const appName = "Weather Up"

    const eventEmitter = new EventEmitter();

    return(
        React.Children.map(props.children, child => {
            return (React.cloneElement(child, {appName, eventEmitter}))
        })
    )
}

export default Store;