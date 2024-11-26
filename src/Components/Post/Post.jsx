import {
  faCommentDots,
  faShareSquare,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Post() {
  return (
    <div className="container mt-4">
      <div className="card shadow-sm">
        {/* Post Header */}
        <div className="card-header d-flex align-items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="rounded-circle me-2"
          />
          <strong>John Doe</strong>
          <span className="ms-auto text-muted" style={{ fontSize: "0.8rem" }}>
            2 hrs ago
          </span>
        </div>

        {/* Post Body */}
        <div className="card-body">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*"
            alt="Post"
            className="img-fluid rounded mb-3"
          />
          <p className="card-text">
            🌟 Loving the new features in the app! The updates are simply
            amazing! 🚀
          </p>
          <div className="d-flex justify-content-around mt-3">
            <button className="btn btn-outline-primary btn-sm">
              <FontAwesomeIcon icon={faThumbsUp} className="me-1" /> Like
            </button>
            <button className="btn btn-outline-secondary btn-sm">
              <FontAwesomeIcon icon={faCommentDots} className="me-1" /> Comment
            </button>
            <button className="btn btn-outline-success btn-sm">
              <FontAwesomeIcon icon={faShareSquare} className="me-1" /> Share
            </button>
          </div>
        </div>

        {/* Comment Input */}
        <div className="card-footer">
          <input
            type="text"
            className="form-control"
            placeholder="Write a comment..."
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
