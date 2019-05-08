import React from "react";
import ReactDOM from "react-dom";
import MainScreen from "./components/main-screen/main-screen.jsx";
import filmCards from "./data/films-cards.js";
import {getRandom} from "./helpers/helpers";

const init = () => {
  ReactDOM.render(
      <MainScreen filmTitle = {filmCards[getRandom(20)]}/>,
      document.querySelector(`#root`)
  );
};

init();

