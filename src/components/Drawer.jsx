import React from "react";

export default function Drawer() {
  return (
    <div style={{ display: "none" }} className="overlay">
      <div className="overlay__drawer">
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img className="remove cu-p" src="img/xButton.svg" alt="Remove" />
        </h2>

        <div className="overlay__items">
          {" "}
          <div className="cart d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
              className="cart__img"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove" src="img/xButton.svg" alt="Remove" />
          </div>
          <div className="cart d-flex align-center">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
              className="cart__img"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove" src="img/xButton.svg" alt="Remove" />
          </div>
        </div>

        <div className="overlay__total">
          <ul>
            <li className="d-flex">
              <span>Итого: </span>
              <div></div>
              <b>21 498 руб. </b>
            </li>
            <li className="d-flex">
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
