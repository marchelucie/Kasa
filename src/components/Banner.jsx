import BannerImage from "../assets/banner.png";
import "../styles/banner.scss";

function Banner() {
    return (
        <div className="banner">
            <img src={BannerImage} alt="Bannière de la page d'accueil" className="banner__image" />
            <h2>Chez vous, partout et ailleurs</h2>
        </div>
    )
}

export default Banner;