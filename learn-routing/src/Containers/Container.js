import React, { Component, Suspense } from "react";
import { Route, NavLink, Switch } from "react-router-dom";
import One from "../Components/COne";
import Two from "../Components/CTwo";
import classes from "./Container.css";
import asyncComponent from "./../HOC/asyncComponent";

const Three = React.lazy(() => import("../Components/CThree"));

const asyncDetalsComponent = asyncComponent(() => {
  return import("../Components/Details");
});

class Container extends Component {
  state = {
    test: "test-props"
  };
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact activeStyle={{ color: "red" }} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeStyle={{ color: "red" }} to="/link2">
              Link 2
            </NavLink>
          </li>
          <li>
            <NavLink
              exact
              activeStyle={{ color: "red" }}
              to={{ pathname: "/link3" }}
            >
              Link 3
            </NavLink>
          </li>
        </ul>
        <Route path="/" exact component={One} />
        <Switch>
          <Route path="/link2" exact component={Two} />
          <Route
            path="/link3"
            render={() => (
              <Suspense fallback={<h2>Loading...</h2>}>
                <Three />
              </Suspense>
            )}
          />

          <Route path="/:id" component={asyncDetalsComponent} />
        </Switch>
      </div>
    );
  }
}

export default Container;
