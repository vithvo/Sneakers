import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.scss";

export default function Header({ onClickCart }) {
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/" exact="true">
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
      </Link>

      <div>
        <ul className="d-flex">
          <li onClick={onClickCart} className="mr-30 d-flex align-center  cu-p">
            <img
              width={21}
              height={21}
              className="mr-10"
              src="/img/cart.svg"
              alt="User"
            />

            <span>1205 руб.</span>
          </li>
          <li>
            <Link to="favorites">
              <img
                width={21}
                height={19}
                className="cu-p mr-30"
                src="/img/Favorite.svg"
                alt="Favorite"
              />
            </Link>
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
