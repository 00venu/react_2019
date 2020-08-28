import * as actionTypes from "./actions";

let initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.COUNTER_INCREMENT:
      return {
        count: state.count + 1,
      };
    case actionTypes.SET_FIVE:
      return {
        count: 5,
      };
    default:
      return state;
  }
};

export default reducer;
