import { Link } from 'react-router-dom'
import './Menu.css';

function Menu() {
    return (
        <nav className='Menu'>
            <Link to="/">Accueil</Link>
            <Link to="/About">A propos</Link>
        </nav>
      );
}

export default Menu;
