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
        hover: true,
      });
    }, 1000);
  }
  _untoggleHover() {
    clearTimeout(this.playDelay);
    this.setState({
      hover: false,
    });
  }

  render() {
    const {onPlay, link, src, title, genre} = this.props;

    const {hover} = this.state;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        genre={genre}
        onMouseEnter={this._toggleHover}
        onMouseLeave={this._untoggleHover}
      >
        <VideoPlayer
          link={link}
          src={src}
          title={title}
          onPlay={onPlay}
          playOnHover={hover}
          poster={<img src={src ? src : `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`} />}
        />
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href={link}>
            {title}
          </a>
        </h3>
      </article>
    );
  }
}

Card.propTypes = {
  onPlay: PropTypes.func,
  playOnHover: PropTypes.func,
  onMouseEnter: PropTypes.bool,
  onMouseLeave: PropTypes.bool,
  link: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
