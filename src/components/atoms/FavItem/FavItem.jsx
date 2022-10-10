import React from "react";
import { TrashIcon } from "../../../assets/svg";
import { updateFavorite } from "../../../features/characters/characterSlice";
import "./FavItem.scss";

export const FavItem = ({ name, image, id }) => {
  
  return (
    <div className="fav-item">
      <ul className="fav-item__info">
        <li
          className="fav-item__info-image"
          style={{
            backgroundImage:
              "url("+image+")",
          }}
        ></li>
        <li className="fav-item__info-name">{name}</li>
      </ul>
      <button type="button" className="fav-item__button" onClick={updateFavorite(id)}>
        <TrashIcon />
      </button>
    </div>
  );
};
