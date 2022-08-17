import React, { useState } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    name: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: "12 999 руб.",
    img: "/img/sneakers/1.png",
  },
  {
    name: "Мужские Кроссовки Jordan Air Jordan 11",
    price: "15 800 руб.",
    img: "/img/sneakers/2.png",
  },
  {
    name: "Мужские Кроссовки Nike Kyrie 7",
    price: "21 200 руб.",
    img: "/img/sneakers/3.png",
  },
  {
    name: "Мужские Кроссовки Nike Air Max 270",
    price: "22 700 руб.",
    img: "/img/sneakers/4.png",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />

      <Header />

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

          {arr.map((arr, i) => {
            return (
              <Card key={i} name={arr.name} price={arr.price} img={arr.img} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
