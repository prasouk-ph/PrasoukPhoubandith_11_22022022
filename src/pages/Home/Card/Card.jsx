import './Card.css';

function Card({ title, id }) {
    function handleClick() {
        window.location.href = `/Accomodation/${id}`
    }

    return (
    <div className='card' onClick={ handleClick }>
        <p className='card-title'>{title}</p>
    </div>
  );
}

export default Card;