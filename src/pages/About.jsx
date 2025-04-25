import Banner from "../components/Banner";
import BannerImage from "../assets/banner-about.png";
import Collapse from "../components/Collapse";
import '../styles/About.scss';


function About() {
    return(
        <>
        <Banner bannerImage={BannerImage}/>
        <section className="about-container">
                <Collapse title="Fiabilité" text="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
                <Collapse title="Respect" text="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse title="Service" text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."/>
                <Collapse title="Responsabilité" text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement respecte les normes de sécurité en vigueur."/>
        </section>
        </>
    )
}
export default About;