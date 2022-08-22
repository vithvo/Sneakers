import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "../components/Card";
import AppContext from "../context";

export default function Orders({}) {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://62fce450b9e38585cd48466c.mockapi.io/Orders"
        );
        setOrders(data.map((obj) => obj.items).flat());
        setIsLoading(false);
      } catch (error) {
        alert("Ошибка при запросе заказов");
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="conten p-40">
      <div className="d-flex align-center mb-40 justify-between">
        <h1 className="">Мои покупки</h1>
      </div>
      <div className="content__sneakers d-flex flex-wrap justify-around">
        {/* Отдельная карточка товара */}
        {(isLoading ? [...Array(12)] : orders).map((item, index) => {
          return <Card key={index} loading={isLoading} {...item} />;
        })}
      </div>
    </div>
  );
}
