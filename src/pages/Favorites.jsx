import React, { useContext } from "react";

import Card from "../components/Card";
import AppContext from "../context";

export default function Favorites({ onAddToCart, onAddToFavorite }) {
  const { favorites, isLoading } = useContext(AppContext);
  console.log("favFav", favorites);
  return (
    <div className="conten p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1 className="">Мои закладки</h1>
      </div>
      <div className="content__sneakers d-flex flex-wrap justify-around">
        {/* Отдельная карточка товара */}
        {favorites.map((item, index) => {
          return (
            <Card
              loading={isLoading}
              key={index}
              onPlus={(obj) => onAddToCart(obj)}
              onFavorite={(obj) => onAddToFavorite(obj)}
              {...item}
            />
          );
        })}
      </div>
    </div>
  );
}
