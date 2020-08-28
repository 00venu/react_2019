import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
const checkoutSummary = props => {
  return (
    <div>
      <h3 style={{ textAlign: "center" }}>Please check your final order!</h3>
      <Burger ingredients={props.ingredients} />
      <div style={{ textAlign: "center" }}>
        <Button btnType="Danger" clicked={props.checkoutCancel}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={props.checkoutContinue}>
          SUCCESS
        </Button>
      </div>
    </div>
  );
};

export default checkoutSummary;
