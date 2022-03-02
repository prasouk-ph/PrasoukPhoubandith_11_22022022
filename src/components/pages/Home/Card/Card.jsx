import './Card.css';
import accomodations from '../../../../data/logements.json'

function Card({ title, id }) {
    const cardData = accomodations.filter(accomodation => accomodation.id === id)[0]
    const cardCoverSource = cardData.cover

    function handleClick() {
        window.location.href = `/accomodation/${id}`
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