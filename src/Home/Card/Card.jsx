import './Card.css';

function Card({title}) {
    return (
    <div className='card'>
        <p className='card-title'>{ title }</p>
    </div>
  );
}

export default Card;