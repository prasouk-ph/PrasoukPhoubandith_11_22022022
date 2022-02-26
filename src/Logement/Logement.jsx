import './Logement.css';
import Accordion from '../components/Accordion';
import Tag from './Tag/Tag';
import bigRedStar from '../assets/bigRedStar.png';
import bigGreyStar from '../assets/bigGreyStar.png';
import React, { useState, useEffect } from 'react';
import accomodations from '../data/logements.json'
// import { useSearchParams } from "react-router-dom";

function Logement() {
    const [accomodationsData] = useState({ accomodations })
    const currentAccomodation = accomodationsData.accomodations[0]

    const redStarCount = currentAccomodation.rating
    const redStars = []
    for (let count = 0; count < redStarCount; count++) {
        redStars.push(<img key={count} className='star' src={bigRedStar} alt="red star icon" />)
    }

    const greyStarCount = 5 - redStarCount
    const greyStars = []
    for (let count = 0; count < greyStarCount; count++) {
        redStars.push(<img key={count} className='star' src={bigGreyStar} alt="grey star icon" />)
    }

    // const id = useSearchParams();

    useEffect(() => {console.log(accomodationsData, currentAccomodation)})

    return (
    <main className="logement-main">
        <section className="logement-header">
            <div className="logement-carrousel">
                <img className='logement-carrousel-image' src={currentAccomodation.cover} alt="Magnifique appartement proche Canal Saint Martin" />
            </div>
            
            <div className="logement-info-container">
                <div className="logement-info">
                        <h1 className='logement-title'>{currentAccomodation.title}</h1>
                    <p className='logement-location'>{ currentAccomodation.location }</p>
                </div>
                
                <div className="logement-host">
                    <p className='logement-host-name'>{currentAccomodation.host.name}</p>
                    <img className='logement-host-portrait' src={ currentAccomodation.host.picture } alt="portrait" />
                </div>
            </div>
            
            <div className="logement-second-info-container">
                <div className="tag-container">
                    {currentAccomodation.tags.map(tag => (
                        <Tag key={tag} name={tag} />
                    ))}
                </div>

                <div className="logement-rating">
                    {redStars}
                    {greyStars}
                </div>
            </div>
        </section>
        
        <section className="logement-details">
            <Accordion accordionTitle='Description' accordionContent={currentAccomodation.description} accordionType='information'/>
            <Accordion accordionTitle='Équipements' accordionContent={currentAccomodation.equipments} accordionType='information' />
        </section>
    </main>
  );
}

export default Logement;