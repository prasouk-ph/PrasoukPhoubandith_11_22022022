import { Link } from 'react-router-dom'
import './Menu.css';

function Menu() {
    return (
        <nav className='menu'>
            <Link to="/">Accueil</Link>
            <Link to="/About">A propos</Link>
        </nav>
      );
}

export default Menu;
