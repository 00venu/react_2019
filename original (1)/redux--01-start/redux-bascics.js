const redux = require("redux");

const createStore = redux.createStore;

const initialstate = {
  counter: 0
};

// Reducer

const rootReducer = (state = initialstate, action) => {
  return state;
};

// Store

const store = createStore(rootReducer);

console.log(store.getState());

// Dispatching Action
