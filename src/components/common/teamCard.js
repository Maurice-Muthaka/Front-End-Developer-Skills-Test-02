import React from "react";
import mango from "../../images/mango.png";

function TeamCard(props) {
  return (
        
        <div className="d-flex align-items-center mb-3">
            <div className="team-logo mr-3"></div>
            <div className="names">
                <h6>{props.name}</h6>
                <span className="small">{props.role}</span>
            </div>
        </div>

  );
}

export default TeamCard;