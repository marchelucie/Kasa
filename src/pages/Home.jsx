import Banner from "../components/Banner";
import AccomodationCard from "../components/AccomodationCard";
import data from "../data/logements.json";

import '../styles/Home.scss';

function Home() {
    return (
        <>
            <Banner />
            <div className="cards-container">
                {data.map((logement) => (
                    <AccomodationCard
                        key={logement.id}
                        id={logement.id}
                        title={logement.title}
                        cover={logement.cover}
                    />
                ))}
            </div>
        </>
    )
}
export default Home;