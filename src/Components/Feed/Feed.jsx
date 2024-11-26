import React from "react";
import Navbar from "../Navbar/Navbar";
import Post from "../Post/Post";
function Feed() {
  return (
    <div>
      <Navbar />
      <div>
        Feed
        <Post></Post>
      </div>
    </div>
  );
}

export default Feed;
