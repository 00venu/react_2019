import * as actionsObj from "../actions/actions";

const initialval = {
  results: []
};

const reducer = (state = initialval, action) => {
  if (action.type === actionsObj.RESULT) {
    return {
      ...state,
      results: state.results.concat(action.CounterVal)
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
