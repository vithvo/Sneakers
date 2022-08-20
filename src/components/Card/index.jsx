import React, { Fragment, useContext } from "react";
import ContentLoader from "react-content-loader";

import styles from "./Card.module.scss";
import AppContext from "../../context";

export default function Card({
  name,
  price,
  img,
  id,
  onPlus,
  onFavorite,
  loading = false,
}) {
  const { isItemAdded, isItemLiked } = useContext(AppContext);

  const onClickPlus = () => {
    onPlus({ name, price, img, id });
  };
  const onClickLike = () => {
    onFavorite({ name, price, img, id });
  };

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={234}
          viewBox="0 0 150 220"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="-2" y="0" rx="10" ry="10" width="155" height="105" />
          <rect x="0" y="140" rx="2" ry="2" width="155" height="15" />
          <rect x="0" y="160" rx="2" ry="2" width="93" height="15" />
          <rect x="0" y="195" rx="5" ry="5" width="80" height="25" />
          <rect x="56" y="191" rx="0" ry="0" width="1" height="0" />
          <rect x="120" y="188" rx="0" ry="0" width="32" height="34" />
        </ContentLoader>
      ) : (
        <Fragment>
          <div onClick={onClickLike} className={styles.favorite}>
            <img
              src={
                isItemLiked(id) ? "/img/heartLike.svg" : "/img/heartUnlike.svg"
              }
              alt="heart"
            />
          </div>
          <img
            width="100%"
            height={135}
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
                src={
                  isItemAdded(id) ? "/img/okButton.svg" : "/img/plusButton.svg"
                }
                alt="Plus"
                className="cu-p"
              />
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
}
