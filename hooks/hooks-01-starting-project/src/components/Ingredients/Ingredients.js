import React, {
  useReducer,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";
import ErrorModal from "./../UI/ErrorModal";

const Ingredients = () => {
  const ingredientReducer = (currentIngredients, action) => {
    switch (action.type) {
      case "SET":
        return action.ingredient;
      case "ADD":
        return [...currentIngredients, action.ingredient];
      case "DELETE":
        return currentIngredients.filter((ingr) => ingr.id !== action.id);
      default:
        throw new Error("Switch case default");
    }
  };

  const [userIngredients, dispatch] = useReducer(ingredientReducer, []);
  //const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const filterHandler = useCallback((filterIngredents) => {
    dispatch({ type: "SET", ingredient: filterIngredents });
    console.log(filterIngredents);
  }, []);

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
        dispatch({ type: "SET", ingredient: loadIngredients });
      });
  }, []);

  const addIngredientsHandler = useCallback((ingredients) => {
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
        // setUserIngredients((prevIngredients) => [
        //   ...prevIngredients,
        //   { id: resData.name, ...ingredients },
        // ]);

        dispatch({
          type: "ADD",
          ingredient: { id: resData.name, ...ingredients },
        });
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  }, []);

  const removeIngridentHandler = useCallback((id) => {
    setIsLoading(true);
    fetch(`https://hooks-7cc00.firebaseio.com/ingredients/${id}.json`, {
      method: "DELETE",
    }).then((res) => {
      setIsLoading(false);
      // setUserIngredients((prevIngredients) =>
      //   prevIngredients.filter((ing) => ing.id !== id)
      // );
      dispatch({ type: "DELETE", id: id });
    });
  }, []);
  const onCloseHandler = () => {
    setError(null);
    setIsLoading(false);
  };
  const ingredientList = useMemo(() => {
    return (
      <IngredientList
        ingredients={userIngredients}
        onRemoveItem={removeIngridentHandler}
      />
    );
  }, [userIngredients, removeIngridentHandler]);

  return (
    <div className="App">
      {error && <ErrorModal onClose={onCloseHandler}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredients={addIngredientsHandler}
        loading={isLoading}
      />

      <section>
        <Search filterIngredents={filterHandler} />
        {ingredientList}
      </section>
    </div>
  );
};

export default Ingredients;
