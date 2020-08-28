import React, { Component } from "react";
import Aux from "../../hoc/Accelerator";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";

const layout = (props) => (
  <Aux>
    <Toolbar />
    <div style={{ marginTop: "60px" }}></div>

    <main className={classes.Container}>{props.children}</main>
  </Aux>
);

export default layout;
