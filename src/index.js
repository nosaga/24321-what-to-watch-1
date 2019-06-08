import React from "react";
import ReactDOM from "react-dom";
import MainScreen from "./components/main-screen/main-screen.jsx";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducer";


const store = createStore(reducer);
//
// const init = () => {
//   ReactDOM.render(<Provider store={store}>
//     <MainScreen/></Provider>,
//     document.querySelector(`#root`)
//   );
// };


const init = () => {
  ReactDOM.render(<Provider store={store}>
      <MainScreen/></Provider>,
    document.querySelector(`#root`)
  );
};

init();

