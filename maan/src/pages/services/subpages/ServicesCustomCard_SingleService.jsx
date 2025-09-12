import React from "react";
import "./servicesCard.css";
import { Link } from "react-router-dom";

function ServicesCustomCardA({
  title,
  content,
  imageUrl,
 }) {
  // const [selectedTitle, setSelectedTitle] = useState(uniqueTitles[0]); // Initially, the first title is selected

  return (
    <div className="container services-card p-lg-5 pt-5 pb-5">
      <div className="d-flex flex-wrap">
        <div className="services-text-right">
          <h2>{title}</h2>
          {/* <p>{subtitle}</p>
          <div>
            {uniqueTitles.map((newTitle) => (
              <button
                key={newTitle}
                className={selectedTitle === newTitle ? "active" : ""}
                onClick={() => {
                  if (selectedTitle !== newTitle) {
                    setSelectedTitle(newTitle);
                    handleTitleSelection(newTitle);
                  }
                }}
              >
                {newTitle}
              </button>
            ))}
          </div> */}
          <p>{content}</p>
          <Link to="/contact">
            <button className="btn service-cta">Contact us</button>
          </Link>
          <Link to="/clients">
            <button className="btn service-cta">Use Cases</button>
          </Link>
        </div>
        <div>
          <img
            src={imageUrl}
            alt="Sample"
            className="img-fluid services-text-image"
          />
        </div>
      </div>
    </div>
  );
}

export default ServicesCustomCardA;
