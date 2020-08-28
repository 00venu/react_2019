import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./CartIcon.scss";

const cartIcon = (props) => {
  return (
    <div className="CartParent">
      <FontAwesomeIcon className="CartStyle" icon={faShoppingCart} />
      {props.cartQuantity > 0 ? <span>{props.cartQuantity}</span> : null}
    </div>
  );
};

export default cartIcon;
