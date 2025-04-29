import { useState } from "react";
import ArrowOpen from "../assets/arrow-open.svg";
import ArrowClosed from "../assets/arrow-closed.svg";
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
                <img src={isOpen ? ArrowOpen : ArrowClosed} />
            </div>
            {isOpen && (
                <div className="collapse-content">
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
            )}        </div>
    );
}

export default Collapse;