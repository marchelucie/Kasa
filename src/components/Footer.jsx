import WhiteLogo from '../assets/white-logo.svg';
import '../styles/footer.scss';

function Footer() {
    return (
        <footer>
            <img src={WhiteLogo} alt="Logo Kasa"/>
            <p>© 2025 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;