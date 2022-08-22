import { useContext } from "react";

import AppContext from "../context";

export const useCart = () => {
  const { cartItems, favorites, setCartItems } = useContext(AppContext);
  const totalPrice = cartItems.reduce(
    (sum, obj) => Number(sum) + Number(obj.price.split(" ").join("")),
    0
  );
  return { cartItems, favorites, setCartItems, totalPrice };
};
