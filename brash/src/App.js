import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";
import Products from "./pages/Products";
import Favourities from "./pages/Favourities";

class MainContainer extends Component {
  state = {};

  render() {
    return (
      <div>
        <Header />

        <main>
          <Switch>
            <Route path="/fav" component={Favourities} />
            <Route path="/" exact component={Products} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default MainContainer;

// Class based component  - state

// Functional based Component - React Hooks
