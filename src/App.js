import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [items, setItems] = useState([]);
  const [cartOpened, setCartOpened] = useState(false);

  useEffect(() => {
    fetch("https://62fce450b9e38585cd48466c.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}

      <Header onClickCart={() => setCartOpened(true)} />

      <div className="conten p-40">
        <div className="d-flex align-center mb-40 justify-between">
          <h1 className="">Все кроссовки</h1>
          <div className="search d-flex">
            <img src="/img/search.svg" alt="search" />
            <input type="text" placeholder="Поиск..." />
          </div>
        </div>
        <div className="content__sneakers d-flex justify-between flex-wrap">
          {/* Отдельная карточка товара */}

          {items.map((arr, i) => {
            return (
              <Card
                key={i}
                name={arr.name}
                price={arr.price}
                img={arr.img}
                onPlus={() => console.log("Нажали плюс")}
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
