import * as actionsObj from "../actions/actions";

const initialval = {
  counter: 0,
  results: [],
  test: "test"
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
  if (action.type === actionsObj.RESULT) {
    return {
      ...state,
      results: state.results.concat(state.counter)
    };
  }
  if (action.type === actionsObj.DELETE) {
    let val = action.val;
    let arr = [...state.results];
    arr = arr.filter(function(item) {
      return item !== val;
    });
    return {
      ...state,
      results: arr
    };
  }
  return state;
};

export default reducer;
