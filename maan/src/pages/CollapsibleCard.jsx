import React, { useState } from "react";
import "./collapsibleCard.css";
import { Link } from "react-router-dom";

const CollapsibleCard = ({ imageUrl, title, content }) => {
  const [isHovered, setIsHovered] = useState(true);

  const handleToggleHover = () => {
    setIsHovered(isHovered);
  };

  return (
    <div
      className={`collapsible-card ${isHovered ? "hovered" : "hovered"}`}
      onClick={handleToggleHover}
      onMouseEnter={handleToggleHover}
      onMouseLeave={handleToggleHover}
    >
      <img src={imageUrl} alt="Card Image" />
      {isHovered && (
        <div className="card-content">
          <h5>{title}</h5>
          <p>{content}</p>
          <Link to="/services">
            <button className="card-content-button  btn-sm">
              Discover Services
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CollapsibleCard;
