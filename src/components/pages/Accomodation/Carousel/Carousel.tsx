import React, { useState } from 'react';
import leftArrow from '../../../../assets/left-arrow.png';
import rightArrow from '../../../../assets/right-arrow.png';
import './Carousel.css';


function Carousel({ pictures }: {pictures: string[]}): JSX.Element {
    const [index, setIndex] = useState<number>(0)
    let imageSourceToDisplay: string | undefined = pictures[index] // HAVE TO FIX WHEN ACCOMODATION ID IS NOT VALID
    
    function handlePreviousClick() {
        if (index <= 0) {
            setIndex(pictures.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    function handleNextClick() {
        if (index >= pictures.length - 1) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    return (
    <div className='logement-carousel'>
        <img className='logement-carousel-image' src={imageSourceToDisplay} alt="logement" />
        {pictures.length > 1 && <img className='carousel-controls previous-button' src={leftArrow} alt="previous button" onClick={ handlePreviousClick } />}
        {pictures.length > 1 && <img className='carousel-controls next-button' src={rightArrow} alt="next button" onClick={ handleNextClick } />}
    </div>
    );
}

export default Carousel;