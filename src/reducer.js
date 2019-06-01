// const initialState = {
//   genre: `Comedies`,
//   filmList: [`What We Do in the Shadows`]
// };
//
//
// const ActionCreators = {
//   'CHANGE_GENRE': (filterName) => {
//
//     switch (filterName) {
//       case `all`:
//         return genreAll;
//       case `comedies`:
//         return ;
//
//       case `crime`:
//         return ;
//
//       case `documentary`:
//         return ;
//
//       case `dramas`:
//         return ;
//
//
//       case `horror`:
//         return ;
//
//       case `kids & family`:
//         return ;
//
//
//       case `romance`:
//         return ;
//
//       case `sci-fi`:
//         return ;
//
//       case `thrillers`:
//         return ;
//
//
//       default:
//         throw new Error(`Unknown filter name`);
//     }
//
//
//     return {
//       type: `CHANGE_GENRE`,
//       payload: func
//     }
//   }
// }
//
//
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case `CHANGE_GENRE`: return Object.assign({}, state, {
//       genre: state.type + 1
//     });
//   }
//   return state;
// };
//
// export {ActionCreators, reducer};
