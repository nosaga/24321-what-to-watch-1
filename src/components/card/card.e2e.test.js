import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "./card.jsx";

Enzyme.configure({adapter: new Adapter()});
describe(`FilmCardComponent`, () => {
  it(`Click on title calls callback function`, () => {
    const clickHandler = jest.fn();
    const app = shallow(<Card
      onClick={clickHandler}/>);
    const titleLink = app.find(`.small-movie-card__link`);
    titleLink.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
