import React from "react";
import renderer from "react-test-renderer";
import MainScreen from "./main-screen.jsx";

it(`MainScreen renders correctly`, () => {
  const tree = renderer
    .create(<MainScreen
      filmName = {``}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
})

