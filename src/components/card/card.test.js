import React from "react";
import renderer from "react-test-renderer";
import Card from "./card.jsx";

const mock = {
  link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `family`
};

it(`Card renders correctly`, () => {
  const {
    link,
    src,
    title,
    genre
  } = mock;
  const tree = renderer
    .create(<Card
      onMouseEnter={jest.fn()}
      onMouseLeave={jest.fn()}
      link={link}
      src={src}
      title={title}
      genre={genre}
      playOnHover={false}
      onPlay={jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
