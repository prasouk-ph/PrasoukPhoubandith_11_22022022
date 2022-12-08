import React, { useState } from 'react';
import chevronUp from '../../assets/chevron-up.png';
import chevronDown from '../../assets/chevron-down.png';
import './Accordion.css';

interface AccordionProps {
  accordionTitle: string;
  accordionContent: string | string[];
  accordionType: string 
}

function Accordion({ accordionTitle, accordionContent, accordionType }: AccordionProps): JSX.Element {
    const [isActive, setIsActive] = useState(false);

    return (
    <div className={`accordion ${accordionType}`}>
        <div className='accordion-header' onClick={() => setIsActive(!isActive)}>
            <h2 className='accordion-title'>{accordionTitle}</h2>
            {isActive ? <img className='chevron-icon chevron-up' src={chevronUp} alt="chevron up"/> : <img className='chevron-icon chevron-down' src={chevronDown} alt="chevron down"/>}
        </div>
        
        {isActive &&
            <div className='accordion-content'>
                {typeof accordionContent === 'object' ?
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