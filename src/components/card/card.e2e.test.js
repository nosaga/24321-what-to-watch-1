import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";
//import VideoPlayer from "../video/video";

const mock = {
  link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  title: `Fantastic Beasts: The Crimes of Grindelwald`,
  genre: `family`
};
Enzyme.configure({adapter: new Adapter()});
describe(`FilmCardComponent`, () => {
  it(`Hover calls callback function`, () => {
    const {
      link,
      src,
      title,
      genre
    } = mock;
    const hoverOnHandler = jest.fn();
    const hoverOffHandler = jest.fn();
    const app = shallow(<Card
      link={link}
      src={src}
      title={title}
      genre={genre}
      onMouseEnter={hoverOnHandler}
      onMouseLeave={hoverOffHandler}
    />);

    const article = app.find(`article`);
    article.simulate(`hover`);
    app.update();
  });
});
