import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

const mock = {
  films: [
    {
      link: `movie-page.html`,
      src: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
      title: `Fantastic Beasts: The Crimes of Grindelwald`,
    }
  ]
};
Enzyme.configure({adapter: new Adapter()});
describe(`FilmCardComponent`, () => {
  it(`Click on title calls callback function`, () => {
    const {films} = mock;
    const clickHandler = jest.fn();
    const app = shallow(<Card
      films={films}
      onClick={clickHandler}
      onPlay={clickHandler}
    />);

    const titleLink = app.find(`.small-movie-card__link`);
    titleLink.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
  it(`Play button calls callback function`, () => {
    const {films} = mock;
    const clickHandler = jest.fn();
    const app = shallow(<Card
      films={films}
      onClick={clickHandler}
      onPlay={clickHandler}
    />);

    const button = app.find(`button`);
    button.simulate(`click`);
    app.update();
  });
});
