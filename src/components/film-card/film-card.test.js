import React from "react";
import renderer from "react-test-renderer";
import FilmCard from "./film-card.jsx";

it(`FilmCard renders correctly`, () => {
  const tree = renderer
    .create(<FilmCard
      onClick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
