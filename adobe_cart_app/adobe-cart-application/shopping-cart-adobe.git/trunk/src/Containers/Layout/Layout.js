import React, { Component } from "react";
import "./Layout.scss";
import SortBy from "../../Components/SortBy/SortBy";
import ShoppingList from "../../Components/ShoppingList/ShoppingList";
import Filter from "../../Components/Filter/Filter";

class Layout extends Component {
  state = {};

  render() {
    return (
      <div className="ContainerParent">
        <div className="FilterContainer">
          <Filter
            filterPrice={this.props.filterPrice}
            value={this.props.value}
          />
        </div>
        <div className="ProductsContainer">
          <SortBy index={this.props.index} sortPrice={this.props.sortPrice} />
          <ShoppingList
            products={this.props.products}
            addToCart={this.props.addToCart}
          />
        </div>
      </div>
    );
  }
}

export default Layout;
