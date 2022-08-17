import React from "react";

import styles from "./Card.module.scss";

export default function Card({ name, price, img, onPlus, onFavorite }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isLiked, setIsLiked] = React.useState(false);

  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  const onClickLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className={styles.card}>
      <div>
        <img
          onClick={onClickLike}
          className={styles.favorite}
          src={isLiked ? "/img/heartLike.svg" : "/img/heartUnlike.svg"}
          alt="heart"
        />
      </div>
      <img
        width={133}
        height={112}
        src={img}
        alt="sneakers"
        className="mb-15"
      />
      <h5 className="mb-15">{name}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span className="mb-5">Цена:</span>
          <b>{price} руб.</b>
        </div>
        <div>
          <img
            onClick={onClickPlus}
            className={styles.favorite}
            src={isAdded ? "/img/okButton.svg" : "/img/plusButton.svg"}
            alt="Plus"
          />
        </div>
      </div>
    </div>
  );
}
