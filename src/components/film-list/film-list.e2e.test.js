import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import FilmList from "./film-list.jsx";

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
describe(`FilmListComponent`, () => {
  it(`Click on play button calls callback function`, () => {
    const {films} = mock;
    const clickHandler = jest.fn();
    const app = shallow(<FilmList
      onClick={clickHandler}
      onPlay={clickHandler}
      films={films}
    />);

    const button = app.find(`button`);
    button.simulate(`click`);
    app.update();
  });
});
