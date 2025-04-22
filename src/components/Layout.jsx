import Logo from '../assets/logo.svg';
import WhiteLogo from '../assets/white-logo.svg';
import '../styles/layout.css';

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

function Footer() {
    return (
        <footer>
            <img src={WhiteLogo} alt="Logo Kasa"/>
            <p>© 2025 Kasa. All rights reserved</p>
        </footer>
    );
}

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

export default Layout;