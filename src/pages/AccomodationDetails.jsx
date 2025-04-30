import { useParams, Navigate } from "react-router-dom";
import data from "../data/logements.json";
import Carousel from "../components/Carousel";
import AccomodationTitle from "../components/AccomodationTitle";
import Host from "../components/Host";
import Tags from "../components/Tags";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";
import "../styles/AccomodationDetails.scss";

function AccomodationDetails() {
    const { logementId } = useParams();
    const logement = data.find((logement) => logement.id === logementId);

    if (!logement) {
        return <Navigate to="/404" replace />;
    }

    return (
        <>
            <Carousel images={logement.pictures} />
            <div className="accomodation-details-header">
                <AccomodationTitle title={logement.title} location={logement.location} />
                <Host hostName={logement.host.name} hostPicture={logement.host.picture} />
            </div>
            <div className="accomodation-details-tags">
                <Tags tags={logement.tags} />
                <Rating rating={logement.rating} />
            </div>
            <div className="accomodation-details">
                <Collapse title="Description" content={logement.description} />
                <Collapse title="Equipements" content={logement.equipments} />
            </div>
        </>
    )
}
export default AccomodationDetails;