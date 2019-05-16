import React from "react";
import renderer from "react-test-renderer";
import FilmList from "./film-list.jsx";

const mock = {
  films: [
    {
      link: `movie-page.html`,
      src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
    }
  ]
};

it(`FilmList renders correctly`, () => {
  const {films} = mock;
  const tree = renderer
    .create(<FilmList
      films = {films}
      onClick={jest.fn()}
      onPlay={true}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
