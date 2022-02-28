import './Logement.css';
import Accordion from '../../components/Accordion/Accordion';
import Tag from './Tag/Tag';
import bigRedStar from '../../assets/big-red-star.png';
import bigGreyStar from '../../assets/big-grey-star.png';
import accomodations from '../../data/logements.json'
import Carousel from '../../components/Carousel/Carousel'
import { useParams } from "react-router-dom";
import NotFoundPage from '../NotFoundPage/NotFoundPage';

function Logement() {
    const { id } = useParams(); // current page ID
    const currentAccomodation = accomodations.filter(accomodation => accomodation.id === id)[0]
    if (currentAccomodation === undefined) {
        console.log("ID inexistant !");
        return <NotFoundPage />
    }
    
    const redStarCount = currentAccomodation.rating
    const redStars = []
    for (let count = 0; count < redStarCount; count++) {
        redStars.push(<img key={count} className='star' src={bigRedStar} alt="red star icon" />)
    }

    const greyStarCount = 5 - redStarCount
    const greyStars = []
    for (let count = 0; count < greyStarCount; count++) {
        greyStars.push(<img key={count} className='star' src={bigGreyStar} alt="grey star icon" />)
    }

    return (
    <main className="logement-main">
        <section className="logement-header">
            <div className="logement-carrousel">
                    <Carousel pictures={currentAccomodation.pictures} />
            </div>
            
            <div className="logement-info-container">
                <div className="logement-info">
                        <h1 className='logement-title'>{currentAccomodation.title}</h1>
                    <p className='logement-location'>{currentAccomodation.location}</p>
                </div>
                
                <div className="logement-host">
                    <p className='logement-host-name'>{currentAccomodation.host.name}</p>
                    <img className='logement-host-portrait' src={currentAccomodation.host.picture} alt="portrait" />
                </div>
            </div>
            
            <div className="logement-second-info-container">
                <div className="tag-container">
                    {currentAccomodation.tags.map(tag => (
                        <Tag key={tag} name={tag} />
                    ))}
                </div>

                <div className="logement-rating">
                    {redStars}
                    {greyStars}
                </div>
            </div>
        </section>
        
        <section className="logement-details">
            <Accordion accordionTitle='Description' accordionContent={currentAccomodation.description} accordionType='information' />
            <Accordion accordionTitle='Équipements' accordionContent={currentAccomodation.equipments} accordionType='information' />
        </section>
    </main>
  );
}

export default Logement;