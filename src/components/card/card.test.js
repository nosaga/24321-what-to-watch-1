import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const mock = {
  src: ``,
  title: ``,
};

it(`Card renders correctly`, () => {
  const {
    src,
    title,
  } = mock;
  const tree = renderer
    .create(<Card
      src={src}
      title={title}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
