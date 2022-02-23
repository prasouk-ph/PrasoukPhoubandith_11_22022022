import Logo from './Logo/Logo';
import Copyright from './Copyright/Copyright';
import './Footer.css';

function Footer() {
    return (
        <div className='Footer'>
            <Logo />
            <Copyright />
        </div>
      );
}

export default Footer;