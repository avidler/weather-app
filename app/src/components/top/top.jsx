import React, {useState} from 'react'
import Weather from './weather'

import { usePopper } from 'react-popper';

import './topStyle.scss'

function TopSection(props) {
    const [referenceElement, setReferenceElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);
    const [arrowElement, setArrowElement] = useState(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
    });
    return(
        <div className="top-container">
            <div className="title">Weather Up</div>
            <Weather {...props}/>
            
            <button type="button" className="btn btn-select-location" ref={setReferenceElement}>
        Select Location
      </button>

      <div ref={setPopperElement} style={styles.popper} {...attributes.popper}>
        Popper element
        <div ref={setArrowElement} style={styles.arrow} />
      </div>
        </div>
    )
}

export default TopSection