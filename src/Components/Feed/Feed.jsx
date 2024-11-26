import React from "react";
import LeftPane from "../LeftPane/LeftPane";
import Navbar from "../Navbar/Navbar";
import Post from "../Post/Post";
import RightPane from "../RightPane/RightPane";

function Feed() {
  return (
    <div>
      <Navbar />
      <div className="container mt-4">
        <div className="row">
          {/* Left Pane */}
          <div className="col-md-3">
            <LeftPane />
          </div>

          {/* Center Pane (Feed) */}
          <div className="col-md-6">
            <Post />
            <Post />
          </div>

          {/* Right Pane */}
          <div className="col-md-3">
            <RightPane />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
