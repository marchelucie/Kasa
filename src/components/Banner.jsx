import "../styles/banner.scss";

function Banner({title, bannerImage}) {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Bannière de la page d'accueil" className="banner__image" />
            <h2>{title}</h2>
        </div>
    )
}

export default Banner;