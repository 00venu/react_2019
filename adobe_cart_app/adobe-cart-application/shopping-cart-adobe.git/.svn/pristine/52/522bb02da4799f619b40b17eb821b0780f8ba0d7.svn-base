import React from "react";
import "./ProductItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

const productItem = (props) => {
  return (
    <div className="Product">
      <div className="ProductImg">
        <img src={props.products.image} alt="" />
      </div>
      <h3>{props.products.name}</h3>
      <ul>
        <li>
          <FontAwesomeIcon icon={faRupeeSign} className="Rupee" />
          {props.products.price.actual}
        </li>
        <li>{props.products.price.display}</li>
        <li>{props.products.discount}% off</li>
      </ul>
      <button className="BtnAdd" onClick={() => props.addToCart(props.pIndex)}>
        Add to Cart
      </button>
    </div>
  );
};

export default productItem;
