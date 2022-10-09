import React from "react";
import { TrashIcon } from "../../../assets/svg";
import "./FavItem.scss";

export const FavItem = () => {
  return (
    <div className="fav-item">
      <ul className="fav-item__info">
        <li
          className="fav-item__info-image"
          style={{
            backgroundImage:
              "url('http://hp-api.herokuapp.com/images/luna.jpg')",
          }}
        ></li>
        <li className="fav-item__info-name">Luna Lovegood</li>
      </ul>
      <button type="button" className="fav-item__button">
        <TrashIcon />
      </button>
    </div>
  );
};
