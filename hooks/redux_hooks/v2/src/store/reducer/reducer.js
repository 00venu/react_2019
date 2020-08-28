import { TOGGLE_FAV } from "./../action/action";

const initialState = {
  products: [
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ],
};

const productReducer = (state = initialState, action) => {
  //console.log(state.products);
  switch (action.type) {
    case TOGGLE_FAV:
      const prodIndex = state.products.findIndex(
        (p) => p.id === action.productId
      );

      const list = [...state.products];
      list[prodIndex].isFavorite = !list[prodIndex].isFavorite;
      return {
        ...state,
        products: [...list],
      };
    default:
      return state;
  }
};

export default productReducer;
