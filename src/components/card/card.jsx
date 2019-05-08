import React from "react";
import PropTypes from "prop-types";

const Card = ({onClick}) => {
  return (
    <article className="small-movie-card catalog__movies-card">
      <button className="small-movie-card__play-btn" type="button">Play</button>
      <div className="small-movie-card__image">
        <img src="img/bohemian-rhapsody.jpg"
          alt="The Grand Budapest Hotel" width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" onClick={onClick} href="movie-page.html">The Grand Budapest Hotel</a>
      </h3>
    </article>
  );
};

Card.propTypes = {
  onClick: PropTypes.func
};

export default Card;
