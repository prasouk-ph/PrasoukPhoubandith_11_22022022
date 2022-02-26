import './Home.css';
import Card from './Card/Card';
import accomodations from '../data/logements.json'

function Home() {
    const accomodationsData = accomodations

    return (
    <main>
        <section className="home-hero">
            <p className='hero-text'>Chez vous, partout et ailleurs</p>
        </section>
        
        <section className='card-container'>
                {accomodationsData.map(accomodation => (
                    <Card title={accomodation.title} key={accomodation.id} id={accomodation.id} />
                ))}
        </section>
    </main>
  );
}

export default Home;