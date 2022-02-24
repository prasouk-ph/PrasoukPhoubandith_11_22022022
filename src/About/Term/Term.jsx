import React, { useState } from 'react';

import './Term.css';
import chevronUp from '../../assets/chevronUp.png';
import chevronDown from '../../assets/chevronDown.png';


function Term({ termTitle, termContent }) {
    const [isActive, setIsActive] = useState(false);

    return (
    <div className='term'>
        <div className='term-header' onClick={() => setIsActive(!isActive)}>
            <h2 className='term-title'>{ termTitle }</h2>
            {isActive ? <img className='chevron-up' src={chevronUp} alt="chevron up"/> : <img className='chevron-down' src={chevronDown} alt="chevron down"/>}
        </div>
        
        {isActive &&
            <div className='accordion-content'>
                <p>{termContent}</p>
            </div>
        }
    </div>
  );
}

export default Term;