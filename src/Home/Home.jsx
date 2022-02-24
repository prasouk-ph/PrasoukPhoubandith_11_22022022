import './Home.css';
import Card from './Card/Card';

function Home() {
    return (
    <main>
        <section className="hero">
            <p className='hero-text'>Chez vous, partout et ailleurs</p>
        </section>
        
        <section className='card-container'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
        </section>
    </main>
  );
}

export default Home;