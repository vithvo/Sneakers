import React from "react";

import styles from "./Header.module.scss";

export default function Header({ onClickCart }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
        <img
          className="mr-15"
          width={40}
          height={40}
          src="img/logoHeader.png"
          alt="Logo"
        />
        <div>
          <h3 className="text-uppercase">Sneakers</h3>
          <p className="opacity-4">Магазин лучших кроссовок</p>
        </div>
      </div>
      <div>
        <ul className="d-flex">
          <li onClick={onClickCart} className="mr-30 d-flex align-center  cu-p">
            <img
              width={18}
              height={18}
              className="mr-10"
              src="/img/cart.svg"
              alt="User"
            />

            <span>1205 руб.</span>
          </li>
          <li>
            <img
              width={18}
              height={18}
              className="cu-p"
              src="/img/User.svg"
              alt="User"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
