import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Redus Pratice

import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import counterReducer from "./Reducers/counter";
import resultsReducer from "./Reducers/results";

const rootReducer = combineReducers({
  ctr: counterReducer,
  reslt: resultsReducer
});

const logger = store => {
  return next => {
    return action => {
      console.log("[Middleware] dispatching", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || logger;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// Tabs Pratice

//ReactDOM.render(<App />, document.getElementById("root"));

registerServiceWorker();
