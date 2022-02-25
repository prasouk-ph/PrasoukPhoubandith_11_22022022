import './Logement.css';
import Accordion from '../components/Accordion';
import bigRedStar from '../assets/bigRedStar.png';
import bigGreyStar from '../assets/bigGreyStar.png';

function Logement() {
    const descriptionContent = "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied)."
    const equipmentContent = "Climatisation"

    return (
    <main>
            <section className="logement-header">
                <div className='logement-lightbox'>
                    <img src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg" alt="Magnifique appartement proche Canal Saint Martin" />
                </div>
                
                <div className="logement-info">
                    <h1>Magnifique appartement proche Canal Saint Martin</h1>
                    <p className='logement-location'>Paris, Île-de-France</p>
                    <p className='logement-host-name'>Alexandre Dumas</p>
                </div>
                
                <div className="tag-container">
                    <button>Cozy</button>
                </div>

                <div className="logement-rating">
                    <img src={bigRedStar} alt="red star icon" />
                    <img src={bigRedStar} alt="red star icon" />
                    <img src={bigRedStar} alt="red star icon" />
                    <img src={bigGreyStar} alt="red star icon" />
                    <img src={bigGreyStar} alt="red star icon" />
                </div>
        </section>
        
        <section className='logement-details'>
            <Accordion accordionTitle='Description' accordionContent={ descriptionContent } accordionType='information'/>
            <Accordion accordionTitle='Description' accordionContent={ equipmentContent } accordionType='information'/>
        </section>
    </main>
  );
}

export default Logement;