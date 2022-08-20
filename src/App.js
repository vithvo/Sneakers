import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Routes } from "react-router-dom";

import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/Home.jsx";
import Favorites from "./pages/Favorites";
import AppContext from "../src/context";

function App({}) {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cartOpened, setCartOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const cartRespons = await axios.get(
        "https://62fce450b9e38585cd48466c.mockapi.io/Cart"
      );
      const favoritesRespons = await axios.get(
        "https://62fce450b9e38585cd48466c.mockapi.io/Favorites"
      );
      const itemsRespons = await axios.get(
        "https://62fce450b9e38585cd48466c.mockapi.io/Items"
      );

      setIsLoading(false);

      setCartItems(cartRespons.data);
      setFavorites(favoritesRespons.data);
      setItems(itemsRespons.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((cartObj) => Number(cartObj.id) === Number(obj.id))) {
        axios.delete(
          `https://62fce450b9e38585cd48466c.mockapi.io/Cart/${obj.id}`
        );

        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post("https://62fce450b9e38585cd48466c.mockapi.io/Cart", obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {
      alert("Не удалось добавить товар в корзину");
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://62fce450b9e38585cd48466c.mockapi.io/Cart/${id}`);

    setCartItems((prev) =>
      prev.filter((item) => Number(item.id) !== Number(id))
    );
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://62fce450b9e38585cd48466c.mockapi.io/Favorites/${obj.id}`
        );
      } else {
        const { data } = await axios.post(
          "https://62fce450b9e38585cd48466c.mockapi.io/Favorites",
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Не удалось добавить товар в закладки");
    }
  };

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{ items, cartItems, favorites, isItemAdded, isLoading }}
    >
      <div className="wrapper clear">
        {cartOpened && (
          <Drawer
            onRemove={onRemoveItem}
            items={cartItems}
            onClose={() => setCartOpened(false)}
          />
        )}

        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                items={items}
                searchValue={searchValue}
                onChangeSearchInput={onChangeSearchInput}
                setSearchValue={setSearchValue}
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
                isLoading={isLoading}
              />
            }
            exact="true"
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                onAddToCart={onAddToCart}
                onAddToFavorite={onAddToFavorite}
              />
            }
            exact
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
