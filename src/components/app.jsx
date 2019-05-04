import React from "react";
import MainScreen from "./main-screen.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {filmName} = props;
  return <MainScreen
    filmName={filmName}
  />;
};

App.propTypes = {
  filmName: PropTypes.array.isRequired
};

export default App;
