import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Marquee from "react-fast-marquee";
function VideoFooter(props) {
  return (
    <div className="videoSidebar">
      <div className="videoFooter__text">
        <h3 className="VideoUserName">{props.info.username}</h3>
        <p className="VideoUserDescription">{props.info.description}</p>
        <div className="flex_row">
          <MusicNoteIcon />
          <Marquee gradient={false} speed={80}>
            <p className="songName">{props.info.songName}</p>
          </Marquee>
          <img
            className="videoFooter_record"
            src="https://static.thenounproject.com/png/934821-200.png"
            alt="Disc"
          />
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
