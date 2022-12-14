import React from "react";
import { useDispatch } from "react-redux";
import { FavIcon } from "../../../assets/svg";
import { updateFavorite } from "../../../features/characters/characterSlice";
import "./CharacterCard.scss";

export const CharacterCard = ({ character }) => {
  const dispatch = useDispatch();

  return (
    <div className="character-card">
      <div
        className={"character-card__bg character-card__bg--" + character?.house}
      >
        <div
          className="character-card__bg-image"
          style={{
            backgroundImage: "url(" + character?.image + ")",
          }}
        ></div>
      </div>
      <div
        className={
          character?.alive
            ? "character-card__info"
            : "character-card__info character-card__info--dead"
        }
      >
        <div className="character-card__info-status">
          <ul>
            <li>{character?.alive ? "VIVO" : "FINADO"}</li>
            <li>/</li>
            <li>{character?.hogwartsStudent ? "ESTUDIANTE" : "STAFF"}</li>
          </ul>

          <button onClick={() => dispatch(updateFavorite(character?.id))}>
            <FavIcon fill={ character?.fav ? '#000000' : 'transparent' } />
          </button>

        </div>
        <div className="character-card__info-title">{character?.name}</div>
        <ul className="character-card__info-list">
          <li>
            <b>Cumpleaños:</b> <span>{character.dateOfBirth}</span>
          </li>
          <li>
            <b>Género:</b> <span>{character.gender}</span>
          </li>
          <li>
            <b>Color de ojos:</b> <span>{character.eyeColour}</span>
          </li>
          <li>
            <b>Color de pelo:</b> <span>{character.hairColour}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
