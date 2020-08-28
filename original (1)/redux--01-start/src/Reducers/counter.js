import * as actionsObj from "../actions/actions";

const initialval = {
  counter: 0
};

const reducer = (state = initialval, action) => {
  if (action.type === actionsObj.INCREMENT) {
    return {
      ...state,
      counter: state.counter + 1
    };
  }
  if (action.type === actionsObj.DECREMENT) {
    return {
      ...state,
      counter: state.counter - 1
    };
  }
  if (action.type === actionsObj.ADD) {
    return {
      ...state,
      counter: state.counter + action.val
    };
  }
  return state;
};

export default reducer;
