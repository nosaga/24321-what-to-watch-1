import React from "react";
import ReactDOM from "react-dom";
import MainScreen from "./components/main-screen/main-screen.jsx";
import {getRandom} from "./helpers/helpers";

const init = () => {
  const settings = {
    filmName: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]
  };
  ReactDOM.render(
      <MainScreen filmName = {settings.filmName[getRandom(3)]}/>,
      document.querySelector(`#root`)
  );
};

init();

