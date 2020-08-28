import React from "react";

import "./IngredientList.css";

const IngredientList = (props) => {
  let keyword = props.searchVal;
  let filtered = props.ingredients;
  keyword = keyword.toLowerCase();
  filtered = props.ingredients.filter((entry) =>
    Object.values(entry).some((val) => {
      return typeof val === "string" && val.toLowerCase().includes(keyword);
    })
  );
 
  return (
    <section className="ingredient-list">
      <h2>Loaded Ingredients</h2>
      <ul>
        {filtered.map((ig) => (
          <li key={ig.id} onClick={() => props.deleteHandler(ig.title)}>
            <span>{ig.title}</span>
            <span>{ig.amount}x</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default IngredientList;
