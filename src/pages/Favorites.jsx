import React from "react";
import Card from "../components/Card";

export default function Favorites({ items, onAddToCart, onAddToFavorite }) {
  return (
    <div className="conten p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1 className="">Мои закладки</h1>
      </div>
      <div className="content__sneakers d-flex flex-wrap justify-around">
        {/* Отдельная карточка товара */}
        {items.map((item, index) => {
          return (
            <Card
              favorited={true}
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
