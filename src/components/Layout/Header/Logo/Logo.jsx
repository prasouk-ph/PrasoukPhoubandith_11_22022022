import logo from '../../../../assets/header-logo.svg';
import './Logo.css';

function Logo() {
    return (
        <div>
            <img className='header-logo' src={logo} alt="logo" />
        </div>
      );
}

export default Logo;