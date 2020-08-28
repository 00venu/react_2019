import React from "react";
import "./CheckoutProducts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRupeeSign,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import laptop from "../../Asserts/Images/laptop.jpg";
const checkoutProducts = (props) => {
  return (
    <div className="CProductParent">
      <div className="Product">
        <div className="ProductImg">
          <img src={props.productInfo.image} alt="" />
        </div>
        <div className="ItemPrice">
          <h3>{props.productInfo.name}</h3>
          <ul>
            <li>
              <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />

              {props.productInfo.price.actual}
            </li>
            <li>{props.productInfo.price.display}</li>
            <li>{props.productInfo.discount}% off</li>
          </ul>
        </div>
        <div className="QuantityHolder">
          <div
            className="circle"
            onClick={() => props.minusToCart(props.pIndex)}
          >
            <FontAwesomeIcon icon={faMinus} className="itemQuantity" />
          </div>
          <input
            type="number"
            value={props.productInfo.quntity}
            onChange={(event) => props.inputHandler(event, props.pIndex)}
          />
          <div className="circle" onClick={() => props.addToCart(props.pIndex)}>
            <FontAwesomeIcon icon={faPlus} className="itemQuantity" />
          </div>
        </div>
        <div
          className="Remove"
          onClick={() => props.removeFromCart(props.pIndex)}
        >
          Remove
        </div>
      </div>
    </div>
  );
};

export default checkoutProducts;
