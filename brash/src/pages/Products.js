import React, { Component } from "react";

import { ITEM_LIST } from "../data/dummy-data";

class Products extends Component {
  state = {};

  render() {
    const ItemList = ITEM_LIST.map((item) => {
      return (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.imageUrl} />
          <div>{item.price}</div>
          <button>Favourite</button>
        </div>
      );
    });

    return <div>{ItemList}</div>;
  }
}

export default Products;
