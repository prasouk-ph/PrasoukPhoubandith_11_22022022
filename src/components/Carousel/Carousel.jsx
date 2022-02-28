// import React, { useState } from 'react';

import './Carousel.css';


function Carousel({pictures}) {
    let imageSourceToDisplay = pictures[0]

    return (
    <div>
        <img className='logement-carrousel-image' src={imageSourceToDisplay} alt="logement" />
    </div>
  );
}

export default Carousel;