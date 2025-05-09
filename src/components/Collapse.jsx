import { useState } from "react";
import Arrow from "../assets/arrow-closed.svg";
import "../styles/Collapse.scss";

function Collapse({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <div className="collapse-header" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <img src={Arrow} alt="toggle" className={`collapse-arrow ${isOpen ? 'rotate' : ''}`} />
            </div>
            <div className={`collapse-content ${isOpen ? 'open' : 'closed'}`}>
                {Array.isArray(content) ? (
                    <ul>
                        {content.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                ) : (
                    <p>{content}</p>
                )}
            </div>
        </div>
    );
}

export default Collapse;