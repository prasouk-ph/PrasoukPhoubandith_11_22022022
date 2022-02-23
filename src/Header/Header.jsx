import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import './Header.css';

function Header() {
    return (
        <div className='Header'>
            <Logo />
            <Menu />
        </div>
      );
}

export default Header;
