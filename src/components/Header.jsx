import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
                    <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")} end>
                            Accueil
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}>
                            A Propos
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;