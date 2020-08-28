import React from "react";
import classes from "./NavigationItems.css";
import { NavLink } from "react-router-dom";

const navigationItems = props => {
  return (
    <React.Fragment>
      <ul className={classes.NavigationItems}>
        <li>
          <NavLink exact activeClassName={classes.active} to="/">
            Burger Builder
          </NavLink>
        </li>
        <li>
          <NavLink exact activeClassName={classes.active} to="/orders">
            Orders
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default navigationItems;
