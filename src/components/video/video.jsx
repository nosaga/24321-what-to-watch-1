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
      hover: false
    };

    this._onHoverON = this._onHoverON.bind(this);
    this._onHoverOFF = this._onHoverOFF.bind(this);
  }
  render() {
    const {isLoading, isPlaying} = this.state;
    const {src, title, link} = this.props;

    return (
      <div>
        <button className={`small-movie-card__${isPlaying ? `` : `play`}-btn`}
                type="button" disabled={isLoading}
                onMouseEnter={this._onHoverON} onMouseLeave={this._onHoverOFF}>{isPlaying ? `Pause` : `Play`}</button>
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

  componentDidUpdate() {
    const video = this._videoRef.current;
    if (this.props.isPlaying) {
      video.play();
    } else {
      video.pause();
    }
  }

  _onHoverON() {
    this.playDelay = setTimeout(() => {
      this.setState({
        isPlaying: !this.state.isPlaying,
        hover: !this.state.hover
      }, () => {
        const video = this._videoRef.current;
        video.play();
      });
      console.log(this.state.hover);
    }, 1000);
  }

  _onHoverOFF() {
    clearTimeout(this.playDelay);
//     this.setState({
//       hover: this.state.hover
//     });
    console.log(this.state.hover);
    console.log('I work');
  }

}

VideoPlayer.propTypes = {
  onHoverON: PropTypes.func,
  isPlaying: PropTypes.bool,
  link: PropTypes.string.isRequired,
  src: PropTypes.string,
  title: PropTypes.string,
};

export default VideoPlayer;


