import { Link } from "react-router-dom";
import "../styles/accomodation-card.scss";

function AccomodationCard({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`} className="accomodation-card">
            <img src={cover} alt={title} />
            <h3>{title}</h3>
            <div className="card-overlay"></div>
        </Link>
    );
}

export default AccomodationCard;