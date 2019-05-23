import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video/video.jsx";

class Card extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    };
    this._toggleHover = this._toggleHover.bind(this);
    this._untoggleHover = this._untoggleHover.bind(this);
  }

  _toggleHover() {
    this.playDelay = setTimeout(() => {
      this.setState({
        hover: !this.state.hover
      });
    }, 1000);
  }
  _untoggleHover() {
    clearTimeout(this.playDelay);
    this.setState({
      hover: this.state.hover
    });
  }

  render() {
    const {
      onClick,
      onPlay,
      link,
      src,
      title
    } = this.props;

    const {hover} = this.state;

    return (
      <article className="small-movie-card catalog__movies-card" onMouseEnter={this._toggleHover} onMouseLeave={this._untoggleHover}>
        {
          hover ? <VideoPlayer link={link} src={src} title={title} onPlay={onPlay}
          /> : <img src = {src ? src : `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}/>
        }
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" onClick={onClick} href={link}>{title}</a>
        </h3>
      </article>
    );
  }
}

Card.propTypes = {
  onClick: PropTypes.func,
  onPlay: PropTypes.func,
  link: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string
};

export default Card;
