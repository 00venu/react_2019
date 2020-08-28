import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import Favourites from "./containers/Favourites";
import { Route } from "react-router-dom";

const App = () => {
  const [initialState, setInitialState] = useState({
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
  });
  const toggleFavHandler = (id) => {
    const prodIndex = initialState.products.findIndex((p) => p.id === id);
    const list = [...initialState.products];
    list[prodIndex].isFavorite = !list[prodIndex].isFavorite;
    setInitialState((prev) => {
      return {
        ...prev,
        product: {
          list,
        },
      };
    });
  };
  return (
    <div className="App">
      <Navigation />
      <main>
        <Route
          path="/"
          exact
          render={() => (
            <ProductsPage
              toggleFavHandler={toggleFavHandler}
              initialState={initialState}
            />
          )}
        />

        <Route
          path="/favourite"
          render={() => <Favourites initialState={initialState} />}
        />
      </main>
    </div>
  );
};

export default App;
