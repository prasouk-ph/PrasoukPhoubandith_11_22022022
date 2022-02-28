import Logo from './Logo/Logo';
import Copyright from './Copyright/Copyright';
import './Footer.css';

function Footer() {
    return (
        <div className='footer'>
            <Logo />
            <Copyright />
        </div>
      );
}

export default Footer;