import React from "react";
import classes from "./Button.css";

const button = props => {
  return (
    <React.Fragment>
      <button
        className={[classes.Button, classes[props.btnType]].join(" ")}
        onClick={props.clicked}
      >
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default button;
