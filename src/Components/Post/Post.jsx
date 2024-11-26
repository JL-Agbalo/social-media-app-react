import React from "react";

function Post() {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-header d-flex align-items-center">
          <img
            src="https://via.placeholder.com/40"
            alt="User Profile"
            className="rounded-circle me-2"
          />
          <strong>John Doe</strong>
        </div>
        <div className="card-body text-center">
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/champagne-beach-espiritu-santo-island-vanuatu-royalty-free-image-1655672510.jpg?crop=0.668xw:1.00xh;0.167xw,0&resize=640:*"
            alt="Post"
            className="img-fluid mb-3"
          />
          <p className="card-text">🌟 Loving the new features in the app! 🚀</p>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-primary btn-sm">👍 Like</button>
            <button className="btn btn-outline-secondary btn-sm">
              💬 Comment
            </button>
            <button className="btn btn-outline-success btn-sm">🔄 Share</button>
          </div>
        </div>
        <div className="card-footer">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your comment"
          />
        </div>
      </div>
    </div>
  );
}

export default Post;
