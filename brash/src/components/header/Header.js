import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./header.css";

class Header extends Component {
  state = {};

  render() {
    return (
      <header className="header">
        <nav>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/fav">Favourities</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
