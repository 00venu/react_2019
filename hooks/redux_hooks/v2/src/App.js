import React from "react";
import "./App.css";
import Navigation from "./components/Nav/Navigation";
import ProductsPage from "./containers/Products";
import Favourites from "./containers/Favourites";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <main>
        <Route path="/" exact component={ProductsPage} />
        <Route path="/favourite" component={Favourites} />
      </main>
    </div>
  );
};

export default App;
