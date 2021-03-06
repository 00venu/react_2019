import React from "react";
import Classes from "./BuildControl.css";

const buildControl = props => (
  <div className={Classes.BuildControl}>
    <div className={Classes.Label}>{props.label}</div>
    <button className={Classes.Less} onClick={props.removeIngredients}>
      Less
    </button>
    <button className={Classes.More} onClick={props.addIngredients}>
      More
    </button>
  </div>
);
export default buildControl;
