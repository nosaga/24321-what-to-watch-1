import films from "mocks/films";

const initialState = {
  genre: `All genres`,
  films: films
};

({
  type: `CHANGE_GENRE`,
  payload: {genre: `comedies`}
})


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE` : return Object.assign({}, state, {
      step: state.step + action.payload
    });
  }
  return state;
}

