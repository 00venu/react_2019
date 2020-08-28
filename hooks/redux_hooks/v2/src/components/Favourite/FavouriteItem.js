import React from "react";
import Card from "../Card/Card";
import "./FavouriteItem.css";

const FavouriteItem = (props) => {
  const { title, description } = props.prod;
  return (
    <Card style={{ marginBottom: "1rem" }}>
      <div className="favorite-item">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Card>
  );
};

export default FavouriteItem;
