import React, {useState} from 'react'
import Weather from './weather'

import { usePopper } from 'react-popper';

import './topStyle.scss'

function TopSection(props) {
    const [isShowPopperOn, setIsShowPopperOn] = useState(false)
    const [referenceElement, setReferenceElement] = useState("ref");
    const [popperElement, setPopperElement] = useState("here is the popper element");
    const [arrowElement, setArrowElement] = useState(null);
    const [locationName, setLocationName] = useState("")
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });

    const { eventEmitter } = props
    

    function togglePopperElement() {
        setIsShowPopperOn(!isShowPopperOn)
    }

    function onLocationNameChange(e) {
        setLocationName(e.target.value)
    }

    function selectCity() {
        togglePopperElement()
        var rtrn = eventEmitter.emit("updateWeather", locationName)
        if(rtrn === false) {
            console.log('Error triggering event');
          }
    }

    //console.log(props)
    return(
        <div className="top-container">
            <div className="title">Weather Up</div>
            <Weather {...props}/>
            <button className="btn btn-select-location" type="button" ref={setReferenceElement} onClick={togglePopperElement}>
        Select Location
      </button>
        { isShowPopperOn && 
      <div className="popup-container" ref={setPopperElement} {...attributes.popper}>
        <div className="form-container">
            <label htmlFor="location-name">Location Name</label>
            <input id="location-name" type="text" placeholder="City Name" onChange={onLocationNameChange}/>
            <button className="btn btn-select-location" onClick={selectCity}>Select</button>
        </div>
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
           }
        </div>
    )
}

export default TopSection