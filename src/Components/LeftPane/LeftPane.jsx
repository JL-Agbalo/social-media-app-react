import { faCog, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function LeftPane() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Left Pane</h5>
        <ul className="list-unstyled">
          <li>
            <FontAwesomeIcon icon={faHome} className="me-2" /> Home
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className="me-2" /> Profile
          </li>
          <li>
            <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftPane;
