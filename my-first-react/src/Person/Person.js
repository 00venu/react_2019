import React from "react";
import classes from "./person.css";

const person = props => {
  return (
    <div className={classes.Container}>
      <p>
        I am from {props.name} component and my age is {props.age}
      </p>
      <span>{props.children}</span>
      <input type="text" value={props.name} onChange={props.changed} />
    </div>
  );
};

export default person;
