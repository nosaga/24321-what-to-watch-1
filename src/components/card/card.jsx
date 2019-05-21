import React from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video/video.jsx";

const Card = ({onClick, onPlay, link, src, title}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <VideoPlayer link={link} src={src} title={title} onPlay={onPlay}
      />
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" onClick={onClick} href={link}>{title}</a>
      </h3>
    </article>
  );
};

Card.propTypes = {
  onClick: PropTypes.func,
  onPlay: PropTypes.func,
  link: PropTypes.string,
  src: PropTypes.string,
  title: PropTypes.string
};

export default Card;
