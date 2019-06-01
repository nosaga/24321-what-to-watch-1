import React from "react";
import films from "../../mocks/films.js";
import PropTypes from "prop-types";

const FilmGenre = ({onClick}) => {
  return (
    <ul className="catalog__genres-list">
      {(films.map((film) => film.genre)
        .reduce((unique, item) =>unique.includes(item) ? unique : [...unique, item], []).map((film, i) =>
          <li className="catalog__genres-item catalog__genres-item--active" key={i}>
            <a href="#" className="catalog__genres-link" onClick={onClick}>{film}</a>
          </li>))
      }
    </ul>
  );
};

FilmGenre.propTypes = {
  onClick: PropTypes.func,
};


export default FilmGenre;
