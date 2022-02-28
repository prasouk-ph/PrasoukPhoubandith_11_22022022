import React, { useState } from 'react';

import './Accordion.css';
import chevronUp from '../../assets/chevronUp.png';
import chevronDown from '../../assets/chevronDown.png';


function Accordion({ accordionTitle, accordionContent, accordionType }) {
    const [isActive, setIsActive] = useState(false);

    return (
    <div className={`accordion ${accordionType}`}>
        <div className='accordion-header' onClick={() => setIsActive(!isActive)}>
            <h2 className='accordion-title'>{accordionTitle}</h2>
            {isActive ? <img className='chevron-up' src={chevronUp} alt="chevron up"/> : <img className='chevron-down' src={chevronDown} alt="chevron down"/>}
        </div>
        
        {isActive &&
            <div className='accordion-content'>
                {accordionTitle === 'Équipements' ?
                <ul className='content-list'>
                    {accordionContent.map((equipment, index) => <li key={`${equipment}-${index}`}>{equipment}</li>)}
                </ul>
                : <p>{accordionContent}</p>
                }
            </div>
        }
    </div>
  );
}

export default Accordion;