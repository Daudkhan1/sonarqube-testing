import React from "react";
import "./InteractiveTiles.css";
const InteractiveTiles = ({ data }) => {
  return (
    <div className="container">
      <div className="row">
        {data.map((tile, index) => (
          <div key={index} className="col-md-3 mb-3">
            <div className="tile card">
              <div className="card-body">
                <h1 className="card-title">{tile.title}</h1>
                <p className="card-text">{tile.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTiles;
