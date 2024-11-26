import {
  faEdit,
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Profile() {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        {/* Profile Header */}
        <div className="card-header text-center bg-primary text-white">
          <img
            src="https://via.placeholder.com/100"
            alt="User Avatar"
            className="rounded-circle mb-3"
          />
          <h4 className="card-title">John Doe</h4>
          <p className="card-subtitle">Software Developer</p>
        </div>

        {/* Profile Details */}
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex align-items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="me-2 text-primary"
              />
              john.doe@example.com
            </li>
            <li className="list-group-item d-flex align-items-center">
              <FontAwesomeIcon icon={faPhone} className="me-2 text-success" />
              +1 234 567 890
            </li>
            <li className="list-group-item d-flex align-items-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="me-2 text-danger"
              />
              San Francisco, CA
            </li>
          </ul>
        </div>

        {/* Edit Profile Button */}
        <div className="card-footer text-center">
          <button className="btn btn-outline-primary">
            <FontAwesomeIcon icon={faEdit} className="me-2" /> Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
