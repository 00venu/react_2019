import React, { Component } from "react";
import Aux from "../../../hoc/Accelerator";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  render() {
    const getList = Object.keys(this.props.ingredients).map(a => {
      return (
        <li key={a}>
          {a}: {this.props.ingredients[a]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p> Please find below the Order Summary</p>
        <ul>{getList}</ul>
        <p>
          <strong>Total Price : ${this.props.price.toFixed(2)}</strong>
        </p>
        <Button btnType="Danger" clicked={this.props.cancelClick}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.continueClick}>
          CONTINUE...
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
