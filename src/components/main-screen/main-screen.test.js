import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainScreen from "./main-screen.jsx";

import {createStore} from "redux";
import {reducer} from "../../reducer";
import {Provider} from "react-redux";
const store = createStore(reducer);

Enzyme.configure({adapter: new Adapter()});
it(`MainScreen renders correctly`, () => {
  const wrapper = shallow(<Provider store={store}><MainScreen
    filmTitle = {``}/></Provider>);


  expect(wrapper).toMatchSnapshot();
});
