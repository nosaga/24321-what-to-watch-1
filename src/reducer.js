const initialState = {
  genre: `All genres`,
};

export const changeGenre = (genre) => ({
  type: `CHANGE_GENRE`,
  payload: genre
});


export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE` :
      return Object.assign({}, state, {
        genre: action.payload
      });
  }
  return state;
};
