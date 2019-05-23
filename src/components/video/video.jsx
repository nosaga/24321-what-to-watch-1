import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
    this.state = {
      progress: this._videoRef.currentTime,
      isLoading: true,
      isPlaying: false,
    };

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }
  render() {
    const {isLoading, isPlaying} = this.state;
    const {src, title, link} = this.props;

    return (
      <div>
        <button className={`small-movie-card__${isPlaying ? `pause` : `play`}-btn`}
          type="button" disabled={isLoading}
          onClick={this._onPlayButtonClick}>{isPlaying ? `Pause` : `Play`}</button>
        <div className="small-movie-card__image">
          <video ref={this._videoRef} width="280" height="175" alt={title} controls muted poster={src ? src : `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`} >
            <source src={link} type="video/mp4"></source>
          </video>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const {link} = this.props;
    const video = this._videoRef.current;

    video.link = link;

    video.oncanplaythrough = () => this.setState({
      isLoading: false
    });

    video.onplay = () => {
      this.setState({
        isPlaying: true
      });
    };

    video.onpause = () => this.setState({
      isPlaying: false
    });
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.oncanplaythrough = null;
    video.onplay = null;
    video.onpause = null;
    video.ontimeupdate = null;
    video.link = ``;
  }

  _onPlayButtonClick() {
    this.setState({isPlaying: !this.state.isPlaying}, () => {
      const video = this._videoRef.current;
      if (this.state.isPlaying) {
        video.play();
      } else {
        video.pause();
      }
    });
  }
}

VideoPlayer.propTypes = {
  onPlayButtonClick: PropTypes.func,
  isPlaying: PropTypes.bool,
  link: PropTypes.string.isRequired,
  src: PropTypes.string,
  title: PropTypes.string,
};

export default VideoPlayer;
