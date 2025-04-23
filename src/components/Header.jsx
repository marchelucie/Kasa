import Logo from '../assets/logo.svg';
import '../styles/header.scss';

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo Kasa"/>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><a href="/">Accueil</a></li>
                    <li className="nav-item"><a href="/about">A Propos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;