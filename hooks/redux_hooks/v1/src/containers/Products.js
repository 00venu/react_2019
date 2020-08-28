import React from "react";
import ProductItem from "./../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  const productList = props.initialState.products;
  // console.log(productList);

  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          prod={prod}
          toggleFavHandler={props.toggleFavHandler}
        />
      ))}
    </ul>
  );
};

export default Products;
