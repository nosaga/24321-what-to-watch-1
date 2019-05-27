import React from "react";
import renderer from "react-test-renderer";
import VideoPlayer from "./video.jsx";

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
    .create(<VideoPlayer
      link={link}
      src={src}
      title={title}
      onClick={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
