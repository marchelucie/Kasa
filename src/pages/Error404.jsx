import "../styles/Error404.scss";
import { Link } from "react-router-dom";

function Error() {
    return (
        <>
            <div className="error404">
                <h1>404</h1>
                <p className="error404_text">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/"><p className="error404_return">Retourner sur la page d'accueil</p></Link>
            </div>
        </>
    )
}
export default Error;