import React from "react";
import "./videoSidebar.css";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

class VideoSidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likesSet: false,
      likes: props.info.likes,
      comments: props.info.comments,
      share: props.info.share,
    };
  }

  render() {
    const handleLikes = () => {
      if (this.state.likesSet) {
        this.setState({
          likesSet: false,
          likes: Number(this.state.likes) - 1,
        });
      } else {
        this.setState({
          likesSet: true,
          likes: Number(this.state.likes) + 1,
        });
      }
    };
    return (
      <div className="videoSidebar-right">
        <div className="videoSidebar__button">
          {this.state.likesSet ? (
            <FavoriteIcon
              fontSize="large"
              onClick={handleLikes}
              classname="buttons"
            />
          ) : (
            <FavoriteBorderIcon
              fontSize="large"
              onClick={handleLikes}
              classname="buttons"
            />
          )}
          <p className="count_values">{this.state.likes}</p>
        </div>

        <div className="videoSidebar__button">
          <MessageIcon fontSize="large" classname="buttons" />
          <p className="count_values">{this.state.comments}</p>
        </div>

        <div className="videoSidebar__button">
          <ShareIcon fontSize="large" classname="buttons" />
          <p className="count_values">{this.state.share}</p>
        </div>
      </div>
    );
  }
}

export default VideoSidebar;
