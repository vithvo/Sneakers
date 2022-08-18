import React from "react";

import styles from "./Drawer.module.scss";

export default function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div className={styles.overlay}>
      <div className={styles.overlayDrawer}>
        <h2 className="mb-30 d-flex justify-between">
          Корзина
          <img
            onClick={onClose}
            className={styles.remove}
            src="img/xButton.svg"
            alt="Remove"
          />
        </h2>

        {items.length > 0 ? (
          <div>
            <div className={styles.overlayItems}>
              {items.map((obj) => {
                return (
                  <div key={obj.id} className={styles.cart}>
                    <div
                      style={{ backgroundImage: `url(${obj.img})` }}
                      className={styles.cartImg}
                    ></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.name}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.id)}
                      className={styles.remove}
                      src="img/xButton.svg"
                      alt="Remove"
                    />
                  </div>
                );
              })}
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
        ) : (
          <div className={styles.cartEmpty}>
            <div className={styles.emptyImg}>
              <img
                className="mb-20"
                width={120}
                height={120}
                src="/img/cartEmpty.svg"
                alt="Empty"
              />

              <h2 className="mb-20">Корзина пустая</h2>

              <p className="opacity-6">
                Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
              </p>
            </div>
            <button onClick={onClose} className={styles.greenButton}>
              <img src="img/arrow.svg" alt="arrow" /> Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
