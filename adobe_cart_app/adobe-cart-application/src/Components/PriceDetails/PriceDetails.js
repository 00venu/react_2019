import React from "react";
import "./PriceDetails.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";

const priceDetails = (props) => {
  return (
    <div className="PDetails">
      <h3>Price Details</h3>
      <ul>
        <li>
          <span>Price ({props.cartQuantity} Item)</span>:
          <span>
            <FontAwesomeIcon className="Rupee" icon={faRupeeSign} />
            {props.finalPrice.displayPrice}
          </span>
        </li>
        <li>
          <span>Discound </span>:
          <span>
            <FontAwesomeIcon className="Rupee" icon={faRupeeSign} />
            {props.finalPrice.discount.toFixed(0)}
          </span>
        </li>
      </ul>
      <ul>
        <li>
          <span>
            <strong>Total Price</strong>
          </span>
          <span>
            <FontAwesomeIcon className="Rupee" icon={faRupeeSign} />
            {(
              props.finalPrice.displayPrice - props.finalPrice.discount
            ).toFixed(0)}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default priceDetails;
