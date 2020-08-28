import * as actionType from "./Actions";

const addIngredients1 = (ingName) => {
  return {
    type: actionType.ADD_INGREDIENTS,
    ingredientName: ingName,
  };
};

export const addIngredients = (ingName) => {
  return (dispatch) => {
    dispatch(addIngredients1(ingName));
  };
};

const removeIngredients1 = (ingName) => {
  return {
    type: actionType.REMOVE_INGREDIENTS,
    ingredientName: ingName,
  };
};

export const removeIngredients = (ingName) => {
  return (dispatch) => {
    dispatch(removeIngredients1(ingName));
  };
};
