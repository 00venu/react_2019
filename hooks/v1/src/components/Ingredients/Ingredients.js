import React, { useState, useEffect, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "./../UI/ErrorModal";

const Ingredients = () => {
  const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const filterHandler = useCallback(
    (filterIngredents) => {
      setUserIngredients(filterIngredents);
      console.log(filterIngredents);
    },
    [setUserIngredients]
  );

  useEffect(() => {
    fetch("https://hooks-7cc00.firebaseio.com/ingredients.json")
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        let loadIngredients = [];
        for (let key in resData) {
          loadIngredients.push({
            id: key,
            title: resData[key].title,
            amount: resData[key].amount,
          });
        }
        setUserIngredients(loadIngredients);
      });
  }, []);

  useEffect(() => {
    console.log("Rendering.......");
  }, [userIngredients]);

  const addIngredientsHandler = (ingredients) => {
    setIsLoading(true);
    fetch("https://hooks-7cc00.firebaseio.com/ingredients.json", {
      method: "POST",
      body: JSON.stringify(ingredients),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((resData) => {
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: resData.name, ...ingredients },
        ]);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  const removeIngridentHandler = (id) => {
    setIsLoading(true);
    fetch(`https://hooks-7cc00.firebaseio.com/ingredients/${id}.json`, {
      method: "DELETE",
    }).then((res) => {
      setIsLoading(false);
      setUserIngredients((prevIngredients) =>
        prevIngredients.filter((ing) => ing.id !== id)
      );
    });
  };
  const onCloseHandler = () => {
    setError(null);
    setIsLoading(false);
  };
  return (
    <div className="App">
      {error && <ErrorModal onClose={onCloseHandler}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredients={addIngredientsHandler}
        loading={isLoading}
      />

      <section>
        <Search filterIngredents={filterHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngridentHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
