import './About.css';
import Term from './Term/Term';

function About() {
    return (
    <main className='about'>
        <section className="hero">
        </section>
        
        <section className='term-container'>
                <Term />
                <Term />
                <Term />
                <Term />
        </section>
    </main>
  );
}

export default About;