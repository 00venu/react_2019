import React from "react";

import classes from "./Spinner.css";

const spinner = () => {
  return (
    <div className={classes.Loading}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default spinner;
