import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import "../styles/Error404.scss";

function Error() {
    return (
        <Layout>
            <div className="error404">
                <h1>404</h1>
                <p className="error404_text">Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/"><p className="error404_return">Retourner sur la page d'accueil</p></Link>
            </div>
        </Layout>
    )
}
export default Error;