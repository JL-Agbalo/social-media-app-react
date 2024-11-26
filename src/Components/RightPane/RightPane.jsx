import { faBullhorn, faFire, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function RightPane() {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Right Pane</h5>
        <ul className="list-unstyled">
          <li>
            <FontAwesomeIcon icon={faFire} className="me-2" /> Trending
          </li>
          <li>
            <FontAwesomeIcon icon={faBullhorn} className="me-2" /> Announcements
          </li>
          <li>
            <FontAwesomeIcon icon={faUsers} className="me-2" /> Suggestions
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightPane;
