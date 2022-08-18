import React, { useState, useEffect } from "react";
import axios from "axios";

import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App({}) {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get("https://62fce450b9e38585cd48466c.mockapi.io/Items")
      .then((res) => setItems(res.data));
    axios
      .get("https://62fce450b9e38585cd48466c.mockapi.io/Cart")
      .then((res) => setCartItems(res.data));
  }, []);

  items.map((item, i) => {
    item.id = i + 1;
  });

  const onAddToCart = (obj) => {
    axios.post("https://62fce450b9e38585cd48466c.mockapi.io/Cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62fce450b9e38585cd48466c.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));

    console.log(id);
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          onRemove={onRemoveItem}
          items={cartItems}
          onClose={() => setCartOpened(false)}
        />
      )}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="conten p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">
            {searchValue
              ? `Поиск по запросу "${searchValue}"`
              : "Все кроссовки"}
          </h1>
          <div className="search d-flex">
            <img src="/img/search.svg" alt="search" />
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

          {items
            .filter((item) => {
              return item.name
                .toLowerCase()
                .includes(searchValue.toLowerCase());
            })
            .map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  price={item.price}
                  img={item.img}
                  onPlus={onAddToCart}
                  onFavorite={() => console.log("Нажали на сердечко")}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
