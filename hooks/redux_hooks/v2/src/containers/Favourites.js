import React from "react";
import FavouriteItem from "../components/Favourite/FavouriteItem";
import { useSelector } from "react-redux";

const Favourites = (props) => {
  const productList = useSelector((state) => state.products);
  const favoriteProducts = productList.filter(
    (prod) => prod.isFavorite === true
  );
  return (
    <div style={{ margin: "1rem 3rem" }}>
      {favoriteProducts.length ? (
        favoriteProducts.map((prod) => {
          return <FavouriteItem key={prod.id} prod={prod} />;
        })
      ) : (
        <div style={{ textAlign: "center", padding: "20px" }}>
          Please Add Favourites
        </div>
      )}
    </div>
  );
};

export default Favourites;
