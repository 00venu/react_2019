import React, { useState } from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";
import LoadingIndicator from "./../UI/LoadingIndicator";

const IngredientForm = React.memo((props) => {
  let [inputTitle, updateTitle] = useState("");
  let [inputAmount, updateAmount] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    //console.log(inputTitle, inputAmount);
    props.onAddIngredients({ title: inputTitle, amount: inputAmount });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputTitle}
              onChange={(event) => {
                updateTitle(event.target.value);
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputAmount}
              onChange={(event) => updateAmount(event.target.value)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
