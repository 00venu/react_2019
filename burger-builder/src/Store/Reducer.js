import * as actionType from "./Actions";

const Ingredient_priceList = {
  salad: 0.5,
  meat: 1.5,
  cheese: 0.4,
  bacon: 0.3,
};

let initialState = {
  ingredients: {
    salad: 0,
    meat: 0,
    cheese: 0,
    bacon: 0,
  },
  totalPrice: 4,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] + 1,
        },
        totalPrice:
          state.totalPrice + Ingredient_priceList[action.ingredientName],
      };

    case actionType.REMOVE_INGREDIENTS:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
        },
      };

    default:
      return state;
  }
};

export default reducer;
