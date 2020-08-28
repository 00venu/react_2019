import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>
              All Products
            </NavLink>
          </li>
          <li>
            <NavLink to="/favourite">Favourites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
