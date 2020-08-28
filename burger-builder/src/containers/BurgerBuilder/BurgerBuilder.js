import React, { Component } from "react";
import { connect } from "react-redux";
import Aux from "../../hoc/Accelerator";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import Spinner from "../../components/UI/Spinner/Spinner";
import { addIngredients, removeIngredients } from "../../Store/ActionCreateors";

import axios from "../../axios-orders";

const Ingredient_priceList = {
  salad: 0.5,
  meat: 1.5,
  cheese: 0.4,
  bacon: 0.3,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchased: false,
    loading: false,
  };

  componentDidMount() {
    // axios
    //   .get("https://burger-builder-6ff2c.firebaseio.com/ingredients.json")
    //   .then((response) => {
    //     this.setState({ ingredients: response.data });
    //   });
  }

  addIngredientsHandler = (type) => {
    let newSet = { ...this.state.ingredients };
    newSet[type] = newSet[type] + 1;
    let basePrice = this.state.totalPrice;
    let finalPrice = basePrice + Ingredient_priceList[type];
    this.setState({ ingredients: newSet, totalPrice: finalPrice });
  };

  removeIngredientsHandler = (type) => {
    let newSet = { ...this.state.ingredients };
    let test = newSet[type];
    if (test <= 0) {
      return;
    }
    newSet[type] = newSet[type] - 1;
    newSet[type] = newSet[type] <= 0 ? 0 : newSet[type];
    let basePrice = this.state.totalPrice;
    let finalPrice = basePrice - Ingredient_priceList[type];
    this.setState({ ingredients: newSet, totalPrice: finalPrice });
  };

  orderHandler = () => {
    this.setState({ purchased: true });
  };

  backdropHandler = () => {
    this.setState({ purchased: false });
  };

  cancelHandler = () => {
    this.setState({ purchased: false });
  };

  continueHandler = () => {
    // alert("Continue...");
    /* this.setState({ loading: true });

    const orders = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice
    };

    axios
      .post("/orders.json", orders)
      .then(response => {
        this.setState({ loading: false, purchased: false });
       
      })
      .catch(error => {
        this.setState({ loading: false, purchased: false });
      });*/

    // let queryparam = [];

    // for (let i in this.state.ingredients) {
    //   queryparam.push(
    //     encodeURIComponent(i) +
    //       "=" +
    //       encodeURIComponent(this.state.ingredients[i])
    //   );
    // }
    // let price = this.props.totalPrice;
    // queryparam.push(
    //   encodeURIComponent("price") + "=" + encodeURIComponent(price.toFixed(2))
    // );

    // let queryString = queryparam.join("&");

    this.props.history.push("/checkout");
  };

  render() {
    // console.log(this.props.ings);
    let ingredients = (
      <div style={{ textAlign: "center" }}>
        <Spinner />
      </div>
    );

    if (this.props.ings) {
      ingredients = (
        <Aux>
          <Burger ingredients={this.props.ings} />
          <BuildControls
            //removeHandler={this.removeIngredientsHandler}
            //addHandler={this.addIngredientsHandler}
            addHandler={this.props.onIngredientsAdded}
            removeHandler={this.props.onIngredientsRemoved}
            price={this.props.totalPrice}
            ordered={this.orderHandler}
          />
        </Aux>
      );
    }

    let orderSummary = (
      <OrderSummary
        cancelClick={this.cancelHandler}
        continueClick={this.continueHandler}
        ingredients={this.props.ings}
        price={this.props.totalPrice}
      />
    );

    if (this.state.loading) {
      orderSummary = (
        <div style={{ textAlign: "center" }}>
          <Spinner />
        </div>
      );
    }

    return (
      <Aux>
        {this.state.purchased === true ? (
          <React.Fragment>
            <Backdrop click={this.backdropHandler} />
            <Modal>{orderSummary}</Modal>
          </React.Fragment>
        ) : null}

        {ingredients}
      </Aux>
    );
  }
}

const mapSteteToProps = (state) => {
  return {
    ings: state.ingredients,
    totalPrice: state.totalPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientsAdded: (ingName) => dispatch(addIngredients(ingName)),
    onIngredientsRemoved: (ingName) => dispatch(removeIngredients(ingName)),
  };
};

export default connect(mapSteteToProps, mapDispatchToProps)(BurgerBuilder);
