import React from "react";

import styles from "./Drawer.module.scss";

export default function Drawer({ onClose }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlayDrawer}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClose}
            className="remove cu-p"
            src="img/xButton.svg"
            alt="Remove"
          />
        </h2>

        <div className={styles.overlayItems}>
          <div className={styles.cart}>
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
              className={styles.cartImg}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className={styles.remove} src="img/xButton.svg" alt="Remove" />
          </div>
          <div className={styles.cart}>
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.png)" }}
              className={styles.cartImg}
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className={styles.remove} src="img/xButton.svg" alt="Remove" />
          </div>
        </div>

        <div className={styles.overlayTotal}>
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
          <button className={styles.greenButton}>
            Оформить заказ
            <img src="img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
