import Layout from "../components/Layout";
import Banner from "../assets/banner.png";
import '../styles/Home.scss';

function Home() {
    return (
        <>
            <Layout>
                <div className="banner">
                    <img src={Banner} alt="Bannière de la page d'accueil" className="banner__image" />
                    <h2>Chez vous, partout et ailleurs</h2>
                </div>
            </Layout>
        </>
    )
}
export default Home;