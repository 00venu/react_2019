import React, { Component } from "react";
import Layout from "./Containers/Layout/Layout";
import "./App.scss";
import Header from "./Components/Header/Header";
import Footer from "./Containers/Footer/Footer";
import Checkout from "./Containers/Checkout/Checkout";
import { Route, Switch } from "react-router-dom";
import axios from "axios";

class App extends Component {
  state = {
    products: [
      {
        name: "Samsung Series 4",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 13999,
          display: 22500,
        },
        discount: 37,
      },
      {
        name: "Samsung Super 6",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 35999,
          display: 66900,
        },
        discount: 46,
      },
      {
        name: "Samsung The Frame",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 84999,
          display: 133900,
        },
        discount: 36,
      },
      {
        name: "Thomson B9 Pro",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 9999,
          display: 16999,
        },
        discount: 41,
      },
      {
        name: "LG Ultra HD",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 39990,
          display: 79990,
        },
        discount: 50,
      },
      {
        name: "Vu Ready LED TV",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 7999,
          display: 17e3,
        },
        discount: 52,
      },
      {
        name: "Koryo Android TV",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 55999,
          display: 199990,
        },
        discount: 71,
      },
      {
        name: "Micromax LED Smart",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 9999,
          display: 27990,
        },
        discount: 64,
      },
    ],
    cartQuantity: 0,
    indexSort: null,
    value: { min: 8160, max: 85696 },
    cartProducts: [],
  };
  // componentDidMount() {
  //   axios
  //     .get("https://api.jsonbin.io/b/5e8c3ad0ff9c906bdf1d5380")
  //     .then((res) => {
  //       let productArr = [];
  //       for (let i in res.data.items) {
  //         productArr.push({
  //           ...res.data.items[i],
  //           quntity: 0,
  //         });
  //       }
  //       this.setState({ products: productArr });
  //     });
  // }

  componentDidMount() {
    let splPrice = this.state.products.map((p) => {
      return p.price.display - (p.price.display * p.discount) / 100;
    });
    let revArr = [];
    for (let i in splPrice) {
      revArr.push({
        ...this.state.products[i],
        price: {
          ...this.state.products[i].price,
          actual: +splPrice[i].toFixed(0),
        },
        quntity: 0,
        visability: true,
      });
    }
    this.setState({ products: revArr });
  }

  addToCart = (index) => {
    let products = [...this.state.products];
    let quantity = products[index].quntity;
    quantity = quantity + 1;
    products[index].quntity = quantity;
    let cartQuantity = this.state.cartQuantity;
    cartQuantity = cartQuantity + 1;
    this.setState({ products: products, cartQuantity: cartQuantity });
  };

  removeFromCart = (index) => {
    let products = [...this.state.products];
    let quantity = products[index].quntity;
    let cartQuantity = this.state.cartQuantity;
    cartQuantity = cartQuantity - quantity;
    quantity = 0;
    products[index].quntity = quantity;
    this.setState({ products: products, cartQuantity: cartQuantity });
  };

  minusToCart = (index) => {
    let products = [...this.state.products];
    let quantity = products[index].quntity;
    quantity = quantity - 1;
    products[index].quntity = quantity;
    let cartQuantity = this.state.cartQuantity;
    cartQuantity = cartQuantity - 1;
    this.setState({ products: products, cartQuantity: cartQuantity });
  };

  inputHandler = (event, index) => {
    let products = [...this.state.products];
    let quantity = products[index].quntity;
    let cartQuantity = this.state.cartQuantity;
    cartQuantity = cartQuantity - products[index].quntity;
    quantity = +event.target.value;
    products[index].quntity = quantity;
    cartQuantity = cartQuantity + quantity;
    this.setState({ products: products, cartQuantity: cartQuantity });
  };
  sortPrice = (index) => {
    let products = [...this.state.products];
    if (index === 0) {
      let productsNew = products.sort(
        (a, b) => parseFloat(b.price.actual) - parseFloat(a.price.actual)
      );
      this.setState({ products: productsNew });
    } else if (index === 1) {
      let productsNew = products.sort(
        (a, b) => parseFloat(a.price.actual) - parseFloat(b.price.actual)
      );
      this.setState({ products: productsNew });
    } else if (index === 2) {
      let productsNew = products.sort(
        (a, b) => parseFloat(b.discount) - parseFloat(a.discount)
      );
      this.setState({ products: productsNew });
    }
    setTimeout(() => {
      this.setState({ indexSort: index });
    }, 50);
  };

  filterPrice = (value) => {
    let products = [...this.state.products];
    let productsNew = products.filter(function (x) {
      x.visability = false;
      if (x.price.actual >= value.min && x.price.actual <= value.max) {
        x.visability = true;
      }
      return x;
    });

    this.setState({ products: productsNew, value: value });
  };

  render() {
    return (
      <div className="Wrapper">
        <Header cartQuantity={this.state.cartQuantity} />
        <Switch>
          <Route
            path="/cart"
            component={() => (
              <Checkout
                products={this.state.products}
                removeFromCart={this.removeFromCart}
                cartQuantity={this.state.cartQuantity}
                addToCart={this.addToCart}
                minusToCart={this.minusToCart}
                inputHandler={this.inputHandler}
              />
            )}
            exact
          />
          <Route
            path="/"
            component={() => (
              <Layout
                products={this.state.products}
                addToCart={this.addToCart}
                sortPrice={this.sortPrice}
                index={this.state.indexSort}
                filterPrice={this.filterPrice}
                value={this.state.value}
              />
            )}
            exact
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
