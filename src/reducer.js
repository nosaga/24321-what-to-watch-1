//import films from "../../mocks/films.js";

const initialState = {
  genre: `All genres`,
};


const reducer = (state = initialState, action) => {


  if (action.type === `GENRE_CLICKED`) {
    console.log(state.genre);
  }
  return state;
  // switch(action.type) {
  //   case `GENRE_CLICKED`: return Object.assign({}, state,{
  //     newState.genre;
  //   });
  // }
}

export default reducer;
