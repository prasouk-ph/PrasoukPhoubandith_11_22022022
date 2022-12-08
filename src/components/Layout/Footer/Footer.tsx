import React from 'react';
import logo from '../../../assets/footer-logo.png';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <img className='footer-logo' src={logo} alt="logo" />
            <p className='copyright'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
}

export default Footer;