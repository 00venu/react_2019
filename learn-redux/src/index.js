import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./store/reducer";
import ReduxThunk from "redux-thunk";

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || logger;
const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware] Dispatching...", action);
      const result = next(action);
      console.log("[Middleware] next state...", store.getState());
      return result;
    };
  };
};
const store = createStore(reducer, applyMiddleware(logger, ReduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
