import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";
import filmCards from "../../data/films-cards.js";


const FilmCard = ({onClick}) => filmCards.map((title) =>
  <Card key={title}
    title={title}
    onClick={onClick}
  />
);

FilmCard.propTypes = {
  onClick: PropTypes.func
};

export default FilmCard;


