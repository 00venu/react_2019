import React from "react";
import classes from "./Input.css";

const input = props => {
  let inputElement = null;

  switch (props.elements.elementType) {
    case "input":
      inputElement = (
        <React.Fragment>
          <input
            type={props.elements.elementConfig.type}
            placeholder={props.elements.elementConfig.placeholder}
            className={classes.Input}
            value={props.elements.value}
            onChange={props.change}
          />
          {props.elements.valid === true ? null : (
            <span className={classes.Error}>This fiels is required</span>
          )}
        </React.Fragment>
      );
      break;
    case "select":
      inputElement = (
        <select className={classes.Select} onChange={props.change}>
          {props.elements.elementConfig.options.map(option => {
            return <option key={option.value}>{option.displayValue}</option>;
          })}
        </select>
      );
      break;
    case "textarea":
      inputElement = (
        <React.Fragment>
          <textarea
            className={classes.Textarea}
            placeholder={props.elements.elementConfig.placeholder}
            value={props.elements.value}
            onChange={props.change}
          />
          {props.elements.valid === true ? null : (
            <span className={classes.Error}>This fiels is required</span>
          )}
        </React.Fragment>
      );
      break;
    default:
      inputElement = (
        <React.Fragment>
          <input
            type={props.elements.elementConfig.type}
            placeholder={props.elements.elementConfig.placeholder}
            className={classes.Input}
            value={props.elements.value}
            onChange={props.change}
          />
          {props.elements.valid === true ? null : (
            <span className={classes.Error}>This fiels is required</span>
          )}
        </React.Fragment>
      );
  }
  return (
    <div className={classes.Row}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
