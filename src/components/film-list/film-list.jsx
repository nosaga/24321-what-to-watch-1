import React from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

const FilmList = (props) => {
  return (
    <Card
      title={props.title}
      link={props.link}
      src={props.src}
      onClick={props.onClick}
      onPlay={props.onPlay}
    />
  );
};

FilmList.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  src: PropTypes.string,
  onClick: PropTypes.func,
  onPlay: PropTypes.func
};

export default FilmList;


