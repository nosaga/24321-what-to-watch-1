import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import {getRandom} from "./helpers/helpers";

const init = () => {
  const settings = {
    filmName: [`Fantastic Beasts`, `Bohemian Rhapsody`, `Macbeth`]
  }
  ReactDOM.render(
      <App filmName = {settings.filmName[getRandom(3)]}/>,
      document.querySelector(`#root`)
  );
};

init();
