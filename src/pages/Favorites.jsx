import React, { useContext } from "react";

import Card from "../components/Card";
import AppContext from "../context";
import Info from "../components/Info";

export default function Favorites({ onAddToCart, onAddToFavorite }) {
  const { favorites, isLoading } = useContext(AppContext);
  console.log("favFav", favorites);
  return (
    <div className="conten p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1 className="">Мои закладки</h1>
      </div>
      <div className="content__sneakers d-flex flex-wrap">
        {/* Отдельная карточка товара */}

        {(isLoading ? [...Array(12)] : favorites).map((item, index) => {
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

        {!favorites.length > 0 && !isLoading && (
          <Info
            title="Закладок нет :("
            description="Вы ничего не добавляли в закладки"
            image="img/smileSad.svg"
          />
        )}
      </div>
    </div>
  );
}
