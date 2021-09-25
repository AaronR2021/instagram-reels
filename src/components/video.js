import React, { useState, useRef } from "react";
import Loader from "./loader";
import "./video.css";
import VideoSidebar from "../components/VideoSidebar.js";
import VideoFooter from "../components/VideoFooter.js";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      videoList: null,
    };
  }
  componentDidMount() {
    fetch("https://tiktok-aaron.herokuapp.com/users")
      .then((res) => res.json())
      .then((videoInfo) => {
        this.setState({
          loading: false,
          videoList: videoInfo,
        });
      });
  }
  render() {
    return (
      <>
        {this.state.loading ? (
          <Loader size={40} />
        ) : (
          <>
            {this.state.videoList.map((individualVideo) => (
              <div
                className="individualVideoContainer"
                key={individualVideo._id}
              >
                <IndividualVideo info={individualVideo} />
              </div>
            ))}
          </>
        )}
      </>
    );
  }
}

function IndividualVideo(props) {
  const [playing, setPlay] = useState(true);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <>
      <video
        autoPlay
        loop
        className="videoPlayer"
        src={props.info.url}
        ref={videoRef}
        onClick={handleVideoPress}
      ></video>
      <VideoSidebar info={props.info} />
      <VideoFooter info={props.info} />
    </>
  );
}

export default Video;
