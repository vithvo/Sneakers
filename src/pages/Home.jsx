import React from "react";

import Card from "../components/Card";

export default function Home({
  searchValue,
  onChangeSearchInput,
  setSearchValue,
  items,
  onAddToCart,
  onAddToFavorite,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) => {
      return item.name.toLowerCase().includes(searchValue.toLowerCase());
    });
    return (isLoading ? [...Array(20)] : filtredItems).map((item, index) => {
      return (
        <Card

          key={index}
          onPlus={(obj) => onAddToCart(obj)}
          onFavorite={(obj) => onAddToFavorite(obj)}
          loading={isLoading}
          {...item}
        />
      );
    });
  };

  return (
    <div className="conten p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1 className="">
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search d-flex">
          <img src="img/search.svg" alt="search" />
          <input
            value={searchValue}
            onChange={onChangeSearchInput}
            type="text"
            placeholder="Поиск..."
          />
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clear"
              src="img/xButton.svg"
              alt="Cleaer"
            />
          )}
        </div>
      </div>
      <div className="content__sneakers d-flex flex-wrap justify-around">
        {/* Отдельная карточка товара */}

        {renderItems()}
      </div>
    </div>
  );
}
