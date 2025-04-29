import { Link } from "react-router-dom";
import Logo from '../assets/logo.svg';
import '../styles/Header.scss';

function Header() {
    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="Logo Kasa" />
            </Link>
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><Link to="/">Accueil</Link></li>
                    <li className="nav-item"><Link to="/about">A Propos</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;