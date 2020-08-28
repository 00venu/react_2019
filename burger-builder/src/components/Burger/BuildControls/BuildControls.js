import React from "react";

import Classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" }
];

const buildControls = props => {
  return (
    <div className={Classes.BuildControls}>
      <p>
        Total Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map(control => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            removeIngredients={() => props.removeHandler(control.type)}
            addIngredients={() => props.addHandler(control.type)}
          />
        );
      })}

      <button className={Classes.OrderButton} onClick={props.ordered}>
        ORDER NOW
      </button>
    </div>
  );
};

export default buildControls;
