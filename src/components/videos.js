import React from "react";
import "./videos.css";
import Video from "../components/video.js";

class Videos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="root">
          <div className="video_parent_container">
            <Video />
          </div>
        </div>
      </>
    );
  }
}

export default Videos;
