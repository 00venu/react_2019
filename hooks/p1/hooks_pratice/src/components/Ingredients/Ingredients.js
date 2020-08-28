import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [allIngrediends, setAllIngrediends] = useState([]);
  const [searchVal, setSearchVal] = useState("");
  const getIngredients = (ingredients) => {
    setAllIngrediends((prevIngr) => [
      ...prevIngr,
      { id: Math.random().toFixed(2).toString(), ...ingredients },
    ]);
  };

  const filterHandler = (value) => {
    setSearchVal(value);
  };

  const deleteHandler = (value) => {
    const filtered = allIngrediends.filter((ing) => {
      return ing.title !== value;
    });
    setAllIngrediends(filtered);
  };

  return (
    <div className="App">
      <IngredientForm getIngredients={getIngredients} />

      <section>
        <Search filterHandler={filterHandler} />
        <IngredientList
          ingredients={allIngrediends}
          searchVal={searchVal}
          deleteHandler={deleteHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
