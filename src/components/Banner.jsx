import "../styles/Banner.scss";

function Banner({ title, bannerImage, pageName }) {
    return (
        <div className="banner">
            <img src={bannerImage} alt="Bannière" className={`banner-image-${pageName}`}/>
            <h2>{title}</h2>
        </div>
    )
}

export default Banner;