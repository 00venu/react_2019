import React, { Component } from "react";
import Order from "./Order/Order";
import axios from "../../axios-orders";

class Orders extends Component {
  state = {
    order: [],
  };
  componentDidMount() {
    axios.get("/orders.json").then((res) => {
      let ordersArr = [];

      for (let k in res.data) {
        ordersArr.push({ ...res.data[k], id: k });
      }
      this.setState({ order: ordersArr });
    });
  }
  render() {
    let test = this.state.order.map((d) => {
      return (
        <Order key={d.id} ingredients={d.ingredients} price={d.totalPrice} />
      );
    });

    return <div>{test}</div>;
  }
}
export default Orders;
