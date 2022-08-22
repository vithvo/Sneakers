import axios from "axios";
import React, { Fragment, useState } from "react";

import { useCart } from "../../hooks/useCart";
import Info from "../Info";

import styles from "./Drawer.module.scss";

export default function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [isOrderComplited, setIsOrderComplited] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://62fce450b9e38585cd48466c.mockapi.io/Orders",
        { items: cartItems }
      );

      setOrderId(data.id);
      setIsOrderComplited(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          "https://62fce450b9e38585cd48466c.mockapi.io/Cart/" + item.id
        );
      }
    } catch (error) {
      alert("Ошибка при создании заказа :(");
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div
      onClick={onClose}
      className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={styles.overlayDrawer}
      >
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
          <Fragment>
            <div className={styles.overlayItems}>
              {items.map((obj, index) => {
                return (
                  <div key={index} className={styles.cart}>
                    <div
                      style={{ backgroundImage: `url(${obj.img})` }}
                      className={styles.cartImg}
                    ></div>
                    <div className="mr-20 flex">
                      <p className="mb-5">{obj.name}</p>
                      <b>{obj.price} руб.</b>
                    </div>
                    <img
                      onClick={() => onRemove(obj.idItem, obj.id)}
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
                  <b>{totalPrice} руб. </b>
                </li>
                <li className="d-flex">
                  <span>Из них НДС 18%: </span>
                  <div></div>
                  <b>{Math.ceil(totalPrice - totalPrice / 1.18)} руб. </b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className={styles.greenButton}
              >
                Оформить заказ
                <img src="img/arrow.svg" alt="arrow" />
              </button>
            </div>
          </Fragment>
        ) : (
          <Info
            title={isOrderComplited ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplited
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={isOrderComplited ? "/img/done.svg" : "/img/cartEmpty.svg"}
          />
        )}
      </div>
    </div>
  );
}
