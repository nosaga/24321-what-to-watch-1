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
  it(`Hover calls callback function`, () => {
    const {films} = mock;
    const hoverOnHandler = jest.fn();
    const hoverOffHandler = jest.fn();
    const app = shallow(<Card
      films={films}
      onMouseEnter={hoverOnHandler}
      onMouseLeave={hoverOffHandler}
    />);

    const article = app.find(`article`);
    article.simulate(`hover`);
    app.update();
  });
});
