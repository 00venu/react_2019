import React from "react";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
import classes from "./Burger.css";
import { withRouter } from "react-router-dom";

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(items => {
      return [...Array(props.ingredients[items])].map((_, i) => {
        return <BurgerIngredients key={items + i} type={items} />;
      });
    })
    .reduce((a, el) => {
      return a.concat(el);
    }, []);

  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngredients.length === 0 ? (
        <p className={classes.EmptyBurger}>Please Add Ingredients</p>
      ) : (
        transformedIngredients
      )}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default burger;
