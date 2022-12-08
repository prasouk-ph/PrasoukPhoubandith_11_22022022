import React, { useEffect } from 'react';
import './Accomodation.css';
import Accordion from '../../Accordion/Accordion';
import Tag from './Tag/Tag';
import bigRedStar from '../../../assets/big-red-star.png';
import bigGreyStar from '../../../assets/big-grey-star.png';
import accomodations from '../../../data/logements.json'
import Carousel from './Carousel/Carousel'
import { useParams, useNavigate } from "react-router-dom";

function Accomodation(): JSX.Element {
    let navigate = useNavigate();
        
    useEffect(() => {
      if (currentAccomodation === undefined) {
        console.log("ID inexistant !");
        navigate("/notfound");
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { id } = useParams(); // current page ID
    
    interface Accomodation {
      id: string;
      title: string;
      cover: string;
      pictures: string[];
      description: string;
      host: {
        name: string;
        picture: string
      };
      rating: string;
      location: string;
      equipments: string[];
      tags: string[]
    }
  
    const currentAccomodation: Accomodation | undefined = accomodations.filter(accomodation => accomodation.id === id)[0]
    
    
    const redStarCount: number = parseInt(currentAccomodation?.rating)
    const redStars: JSX.Element[] = []
    for (let count = 0; count < redStarCount; count++) {
        redStars.push(<img key={count} className='star' src={bigRedStar} alt="red star icon" />)
    }

    const greyStarCount: number = 5 - redStarCount
    const greyStars: JSX.Element[] = []
    for (let count = 0; count < greyStarCount; count++) {
        greyStars.push(<img key={count} className='star' src={bigGreyStar} alt="grey star icon" />)
    }

    return (
    <main className="accomodation-main">
        <section className="accomodation-header">
            <div className="accomodation-carrousel">
                <Carousel pictures={currentAccomodation?.pictures} />
            </div>
            
            <div className="accomodation-info-container">
                <div className="accomodation-details-container">
                    <div className="accomodation-info">
                        <h1 className='accomodation-title'>{currentAccomodation?.title}</h1>
                        <p className='accomodation-location'>{currentAccomodation?.location}</p>
                    </div>
                    
                    <div className="tag-container">
                        {currentAccomodation?.tags.map(tag => (
                            <Tag key={tag} name={tag} />
                        ))}
                    </div>
                </div>
                
                <div className="accomodation-host-info-container">
                    <div className="accomodation-host">
                        <p className='accomodation-host-name'>{currentAccomodation?.host.name}</p>
                        <img className='accomodation-host-portrait' src={currentAccomodation?.host.picture} alt="portrait" />
                    </div>

                    <div className="accomodation-rating">
                        {redStars}
                        {greyStars}
                    </div>
                </div>
            </div>
        </section>
        
        <section className="accomodation-details">
            <Accordion accordionTitle='Description' accordionContent={currentAccomodation?.description} accordionType='information' />
            <Accordion accordionTitle='Équipements' accordionContent={currentAccomodation?.equipments} accordionType='information' />
        </section>
    </main>
    );
}

export default Accomodation;