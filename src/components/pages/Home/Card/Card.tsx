import React from 'react';
import './Card.css';
import accomodations from '../../../../data/logements.json'
import { useNavigate } from "react-router-dom";


function Card({ title, id }: {title: string, id: string}): JSX.Element {
    let navigate = useNavigate();
    const cardData = accomodations.filter(accomodation => accomodation.id === id)[0]
    const cardCoverSource = cardData.cover

    function handleClick() {
        navigate(`/accomodation/${id}`);
    }

    return (
    <div className='card' onClick={ handleClick }>
        <img className='card-cover' src={cardCoverSource} alt="card cover" />
        <div className="card-footer">
            <p className='card-title'>{title}</p>
        </div>
    </div>
    );
}

export default Card;