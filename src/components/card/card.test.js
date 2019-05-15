import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const mock = {
  link: ``,
  src: ``,
  title: ``,
};

it(`Card renders correctly`, () => {
  const {
    link,
    src,
    title,
  } = mock;
  const tree = renderer
    .create(<Card
      link={link}
      src={src}
      title={title}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
