import './Logement.css';
import Accordion from '../components/Accordion';
import Tag from './Tag/Tag';
import bigRedStar from '../assets/bigRedStar.png';
import bigGreyStar from '../assets/bigGreyStar.png';
import hostPortrait from '../assets/hostPortrait.png'

function Logement() {
    const descriptionContent = "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied)."
    const equipmentContent = "Climatisation"

    return (
    <main className='logement-main'>
        <section className="logement-header">
            <div className='logement-carrousel'>
                <img className='logement-carrousel-image' src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg" alt="Magnifique appartement proche Canal Saint Martin" />
            </div>
            
            <div className="logement-info-container">
                <div className="logement-info">
                    <h1 className='logement-title'>Magnifique appartement proche Canal Saint Martin</h1>
                    <p className='logement-location'>Paris, Île-de-France</p>
                </div>
                
                <div className="logement-host">
                    <p className='logement-host-name'>Alexandre Dumas</p>
                    <img className='logement-host-portrait' src={ hostPortrait } alt="portrait" />
                </div>
            </div>
            
            <div className="logement-second-info-container">
                <div className="tag-container">
                    <Tag name='Cozy'/>
                    <Tag name='Canal'/>
                    <Tag name='Paris 10'/>
                </div>

                <div className="logement-rating">
                    <img className='star' src={bigRedStar} alt="red star icon" />
                    <img className='star' src={bigRedStar} alt="red star icon" />
                    <img className='star' src={bigRedStar} alt="red star icon" />
                    <img className='star' src={bigGreyStar} alt="red star icon" />
                    <img className='star' src={bigGreyStar} alt="red star icon" />
                </div>
            </div>
            
        </section>
        
        <section className='logement-details'>
            <Accordion accordionTitle='Description' accordionContent={ descriptionContent } accordionType='information'/>
            <Accordion accordionTitle='Équipements' accordionContent={ equipmentContent } accordionType='information'/>
        </section>
    </main>
  );
}

export default Logement;