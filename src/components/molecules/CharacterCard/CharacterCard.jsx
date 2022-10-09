import React from "react";
import { FavIcon } from "../../../assets/svg";
import "./CharacterCard.scss";

export const CharacterCard = () => {
  return (
    <div className="character-card">
      <div className="character-card__bg character-card__bg--Gryffindor">
        <div
          className="character-card__bg-image"
          style={{
            backgroundImage:
              "url('http://hp-api.herokuapp.com/images/harry.jpg')",
          }}
        ></div>
      </div>
      <div className="character-card__info">
        <div className="character-card__info-status">
          <ul>
            <li>VIVO</li>
            <li>/</li>
            <li>ESTUDIANTE</li>
          </ul>
          <FavIcon />
        </div>
        <div className="character-card__info-title">Harry Potter</div>
        <ul className="character-card__info-list">
          <li>
            <b>Cumpleaños:</b> 31-07-1980
          </li>
          <li>
            <b>Género:</b> Male
          </li>
          <li>
            <b>Color de ojos;</b> Green
          </li>
          <li>
            <b>Color de pelo:</b> Black *
          </li>
        </ul>
      </div>
    </div>
  );
};
