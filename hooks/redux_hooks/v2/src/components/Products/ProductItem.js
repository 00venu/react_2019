import React from "react";
import Card from "./../Card/Card";
import "./ProductItem.css";
import { useDispatch } from "react-redux";
import { toggleFav } from "../../store/action/action";

const ProductItem = (props) => {
  const { id, title, description, isFavorite } = props.prod;
  const dispatch = useDispatch();
  const toggleFavHandler = () => {
    dispatch(toggleFav(id));
  };

  return (
    <Card>
      <div className="product-item">
        <h2 className={isFavorite ? "is-fav" : ""}>{title}</h2>
        <p>{description}</p>
        <button
          className={!isFavorite ? "button-outline" : ""}
          onClick={toggleFavHandler}
        >
          {isFavorite ? "Un-Favorite" : "Favorite"}
        </button>
      </div>
    </Card>
  );
};

export default ProductItem;
