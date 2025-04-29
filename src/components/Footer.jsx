import { Link } from "react-router-dom";
import WhiteLogo from '../assets/white-logo.svg';
import '../styles/Footer.scss';

function Footer() {
    return (
        <footer>
            <Link to="/">
            <img src={WhiteLogo} alt="Logo Kasa"/>
            </Link>
            <p>© 2025 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;