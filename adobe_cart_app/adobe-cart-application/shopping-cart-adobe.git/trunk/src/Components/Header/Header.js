import React, { Component } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Search from "../Seasrch/Search";
import CartIcon from "../CartIcon/CartIcon";

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <h1>
          <Link to="/">
            <FontAwesomeIcon className="StarStyles" icon={faStar} />
          </Link>
        </h1>
        <ul className="TopLinks">
          <li>
            <Search />
          </li>
          <li>
            <Link to="/cart">
              <CartIcon cartQuantity={this.props.cartQuantity} />
            </Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
