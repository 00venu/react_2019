import React from "react";
import classes from "./Order.css";

const order = (props) => {
  let ingArr = [];

  for (let ingredientName in props.ingredients) {
    ingArr.push({
      name: ingredientName,
      quntity: props.ingredients[ingredientName],
    });
  }
  return (
    <div className={classes.OrderContainer}>
      <h3>Ingredients:</h3>
      <ul>
        {ingArr.map((a) => {
          return (
            <li key={a.name}>
              {a.name}-{a.quntity}
            </li>
          );
        })}
      </ul>
      <strong>Price: $ {props.price}</strong>
      <span></span>
    </div>
  );
};
export default order;
