import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  const productList = useSelector((state) => state.products);

  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem key={prod.id} prod={prod} />
      ))}
    </ul>
  );
};

export default Products;
