import React from "react";
import renderer from "react-test-renderer";
import FilmList from "./film-list.jsx";

it(`FilmCard renders correctly`, () => {
  const tree = renderer
    .create(<FilmList
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
