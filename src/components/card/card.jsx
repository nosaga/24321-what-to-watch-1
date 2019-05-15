import React from "react";
import PropTypes from "prop-types";

const Card = ({onClick, onPlay, link, src, title}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button" onClick={onPlay}>Play</button>
      <div className="small-movie-card__image">
        <img src={src ? src : `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
          alt={title} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" onClick={onClick} href={link}>{title}</a>
      </h3>
    </article>
  );
};

Card.propTypes = {
  onClick: PropTypes.func,
  onPlay: PropTypes.func,
  src: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string
};

export default Card;
