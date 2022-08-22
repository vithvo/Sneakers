import React, { useContext } from "react";
import AppContext from "../../context";
import { Link } from "react-router-dom";

import styles from "./Info.module.scss";

export default function Info({ title, description, image }) {
  const { setCartOpened } = useContext(AppContext);
  return (
    <div className={styles.cartEmpty}>
      <div className={styles.emptyImg}>
        <img className="mb-30" src={image} alt="Empty" />

        <h2 className="mb-20">{title}</h2>

        <p className="opacity-6">{description}</p>

        <Link to="/">
          <button
            onClick={() => setCartOpened(false)}
            className={styles.greenButtonEmpty}
          >
            <img src="img/arrow.svg" alt="arrow" /> Вернуться назад
          </button>
        </Link>
      </div>
    </div>
  );
}
