import React, {Component} from "react";
import PropTypes from "prop-types";
import Card from "../card/card.jsx";

class FilmList extends Component {
  render() {
    const {films} = this.props;
    return (
      films.map((film, i) =>
        <Card key={i}
          link={film.link}
          src={film.src}
          title={film.title}
          onClick={film.onClick}
          onPlay={film.onPlay}
        />)
    );
  }
}

FilmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })),
  onClick: PropTypes.func,
  onPlay: PropTypes.bool
};

export default FilmList;
