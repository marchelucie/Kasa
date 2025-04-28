import data from "../data/logements.json";
import { useParams, Navigate } from "react-router-dom";

function AccomodationDetails() {
    const { logementId } = useParams();
    const logement = data.find((logement) => logement.id === logementId);

    if (!logement) {
        return <Navigate to="/404" replace/>;
    }
    
    return(
        <>
        </>
    )
}
export default AccomodationDetails;