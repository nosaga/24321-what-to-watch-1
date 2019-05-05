import React from "react";
import jest from "react-test-renderer";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainScreen from "./main-screen.jsx";

Enzyme.configure({adapter: new Adapter()});
describe(`MainScreenComponent`, () => {
  it(`Click on title calls callback function`, () => {
    const clickHandler = jest.fn();
    const app = shallow(<MainScreen
      filmName={``}
      onClick={clickHandler}/>);
    const titleLink = app.find(`.small-movie-card__link`);
    expect(titleLink.length).toEqual(1);
    titleLink.simulate(`click`);
    expect(clickHandler).toHaveBeenCalledTimes(1);
  });
});
