import './Term.css';

function Term({termTitle, termContent}) {
    return (
    <div className='term'>
            <h2 className='term-title'>{ termTitle }</h2>
            <div className='dropdown-content'>
                <p>{ termContent }</p>
        </div>
    </div>
  );
}

export default Term;