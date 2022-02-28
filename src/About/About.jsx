import './About.css';
import Accordion from '../components/Accordion/Accordion';

function About() {
    const fiabilityContent = "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
    const respectContent = "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
    const serviceContent = "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
    const resposabilityContent = "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

    return (
    <main className='about'>
        <section className="about-hero">
        </section>
        
        <section className='term-container'>
                <Accordion accordionTitle='Fiabilité' accordionContent={fiabilityContent} accordionType='term' />
                <Accordion accordionTitle='Respect' accordionContent={respectContent} accordionType='term' />
                <Accordion accordionTitle='Service' accordionContent={serviceContent} accordionType='term' />
                <Accordion accordionTitle='Fiabilité' accordionContent={resposabilityContent} accordionType='term'/>
        </section>
    </main>
  );
}

export default About;