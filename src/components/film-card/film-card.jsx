import React from "react";
import PropTypes from "prop-types";
import filmCards from "../../data/films-cards.js";

const FilmCard = ({onClick}) => {
  return (
    filmCards.map((title) => {
      return (
        <article className="small-movie-card catalog__movies-card" key={title}>
          <button className="small-movie-card__play-btn" type="button">Play</button>
          <div className="small-movie-card__image">
            <img src="img/bohemian-rhapsody.jpg"
              alt="" width="280" height="175"/>
          </div>
          <h3 className="small-movie-card__title">
            <a className="small-movie-card__link" onClick={onClick} href="movie-page.html">{title}</a>
          </h3>
        </article>
      );
    })
  );
};

FilmCard.propTypes = {
  onClick: PropTypes.func
};

export default FilmCard;
