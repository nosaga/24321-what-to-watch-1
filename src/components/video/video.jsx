import React, {PureComponent} from "react";
import PropTypes from "prop-types";

class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    // this._video = document.createElement(`video`);
    this._video = React.createRef();
    this.state = {
      progress: this._video.currentTime,
      muted: this._video.muted,
      isLoading: true,
      isPlaying: false,
    };

    // this._video.oncanplaythrough = () => this.setState({
    //   isLoading: false
    // });

    // this._video.onplay = () => {
    //   this.setState({
    //     isPlaying: true
    //   });
    // };

    // this._video.onpause = () => this.setState({
    //   isPlaying: false
    // });

    this._onPlayButtonClick = this._onPlayButtonClick.bind(this);
  }

  render() {
    const {isLoading, isPlaying} = this.state;
    const {src, title, link} = this.props;

    return (
      <div>
        <button
          className={`small-movie-card__${isPlaying ? `pause` : `play`}-btn`}
          type="button"
          onClick={this._onPlayButtonClick}
        >
          {isPlaying ? `Pause` : `Play`}
        </button>
        <div className="small-movie-card__image">
          <video
            ref={(c) => (this._video = c)}
            width="280"
            height="175"
            alt={title}
            controls
            poster={src ? src : `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
          >
            <source src={link} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }

  componentDidUpdate() {
    if (this.state.isPlaying) {
      this._video.play();
    } else {
      this._video.pause();
    }
  }
  _onPlayButtonClick() {
    this.setState({isPlaying: !this.state.isPlaying}, () => {
      return this.state.isPlaying ? this._video.play() : this._video.pause();
    });
    console.log(`I work`);
  }
}

VideoPlayer.propTypes = {
  onClick: PropTypes.func,
  onPlay: PropTypes.func,
  src: PropTypes.string,
  title: PropTypes.string,
};

export default VideoPlayer;
