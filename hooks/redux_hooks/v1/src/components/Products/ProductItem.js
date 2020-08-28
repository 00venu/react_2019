import React from "react";
import Card from "./../Card/Card";
import "./ProductItem.css";

const ProductItem = (props) => {
  const { id, title, description, isFavorite } = props.prod;

  return (
    <Card>
      <div className="product-item">
        <h2 className={isFavorite ? "is-fav" : ""}>{title}</h2>
        <p>{description}</p>
        <button
          className={!isFavorite ? "button-outline" : ""}
          onClick={() => props.toggleFavHandler(id)}
        >
          {isFavorite ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
