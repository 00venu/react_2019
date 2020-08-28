import React, { Component } from "react";
import "./Checkout.scss";
import CheckoutProducts from "../../Components/CheckoutProducts/CheckoutProducts";
import PriceDetails from "../../Components/PriceDetails/PriceDetails";

class Checkout extends Component {
  state = {
    displayPrice: 0,
    discount: 0,
  };
  componentDidMount() {
    let price = this.props.products
      .map((p, index) => {
        if (p.quntity > 0) {
          return p.price.display * p.quntity;
        } else {
          return 0;
        }
      })
      .reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);

    let discount = this.props.products
      .map((p, index) => {
        if (p.quntity > 0) {
          return (p.price.display * p.quntity * p.discount) / 100;
        } else {
          return 0;
        }
      })
      .reduce(function (accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);

    setTimeout(() => {
      this.setState({ displayPrice: price, discount: discount });
    }, 100);
  }

  render() {
    let checkoutProducts = this.props.products.map((p, index) => {
      // console.log(p);
      if (p.quntity > 0) {
        return (
          <CheckoutProducts
            key={p.name}
            productInfo={p}
            removeFromCart={this.props.removeFromCart}
            pIndex={index}
            addToCart={this.props.addToCart}
            minusToCart={this.props.minusToCart}
            inputHandler={this.props.inputHandler}
          />
        );
      }
    });
    return (
      <React.Fragment>
        {this.props.cartQuantity > 0 ? (
          <div className="CheckoutParent">
            <div className="CProductsParent">{checkoutProducts}</div>
            <div className="PriceDetailsParent">
              <PriceDetails
                cartQuantity={this.props.cartQuantity}
                products={this.props.products}
                finalPrice={this.state}
              />
            </div>
          </div>
        ) : (
          <h3
            style={{
              textAlign: "center",
              padding: "30px 0",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Cart is empty. Please add products
          </h3>
        )}
      </React.Fragment>
    );
  }
}

export default Checkout;
