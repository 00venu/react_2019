import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import "./ShoppingList.scss";

const shoppingList = (props) => {
  let products = props.products.map((list, index) => {
    if (list.visability === true) {
      return (
        <ProductItem
          key={list.name}
          products={list}
          pIndex={index}
          addToCart={props.addToCart}
        />
      );
    }
  });

  return <div className="ProductsParent">{products}</div>;
};

export default shoppingList;
