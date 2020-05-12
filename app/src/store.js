import React, {useState} from 'react'

function Store() {
    const [appName, setAppName] = useState("Weather Up")

    return(
        React.Children.map(this.props.children, child => {
            return React.cloneElement(child, { ...appName})
        })
    )
}

export default Store;