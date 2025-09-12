import React from "react";

function TeamCard({ name, title }) {
  return (
    <div className="col-md-6 mb-5 g-5">
      <div className="team-card p-4 h-100 border rounded">
        <h3 className="text-center">{name}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default TeamCard;
