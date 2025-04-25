import { Link } from "react-router-dom";
import "../styles/accomodation-card.scss";

function AccomodationCard({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`} className="accomodation-card">
            <img src={cover} alt={title} />
            <div className="card-overlay"></div>
            <h3>{title}</h3>
        </Link>
    );
}

export default AccomodationCard;