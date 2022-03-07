import { Link } from 'react-router-dom'
import logo from '../../../assets/header-logo.svg';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <img className='header-logo' src={logo} alt="logo" />
            
            <nav className='menu'>
                <Link to="/">Accueil</Link>
                <Link to="/about">A propos</Link>
            </nav>
        </div>
    );
}

export default Header;
