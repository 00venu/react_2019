import React, { Component } from "react";
import axios from "../../../axios-orders";

import classes from "./ContactData.css";
import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";

class ContactData extends Component {
  state = {
    ingredients: this.props.ingredients,
    totalPrice: this.props.price,
    loading: false,
    message: false,
  };
  orderHandler = (event) => {
    event.preventDefault();
  };

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const orders = {
      ingredients: this.props.ings,
      totalPrice: this.props.price,
    };
    axios
      .post("/orders.json", orders)
      .then((response) => {
        this.setState({ loading: false, message: true });
        setTimeout(() => {
          this.setState({ message: false });
          this.props.history.push("/");
        }, 1000);
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
  };
  render() {
    return (
      <div className={classes.FormParent}>
        <h3>Please fill the contact details!</h3>
        <form>
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Phone Number" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="pincode" />
          <div style={{ textAlign: "center" }}>
            {this.state.loading === true ? <Spinner /> : null}
            {this.state.message === true ? (
              <h4 style={{ color: "green" }}>
                Your order has been placed succesfully!
              </h4>
            ) : null}
            <Button btnType="Success" clicked={this.orderHandler}>
              Order
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(ContactData);
