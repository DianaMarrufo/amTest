import React, { useState } from "react";
import "./CharacterMenu.scss";
import { FavIcon, UserAddIcon } from "../../../assets/svg";
import { FavItem } from "../../atoms/FavItem/FavItem";

export const CharacterMenu = ({ showModal }) => {

  const [openList, setOpenList] = useState(false)

  const handleOpenFavList = (e) => {
    e.preventDefault()
    setOpenList( prev => !prev)
  }

  const handleOpenModal = () => {
    showModal(true)
  }

  return (
    <div className="character-menu">
      <button type="button" className="character-menu__button" onClick={(e) => handleOpenFavList(e)}>
        FAVORITOS <FavIcon width={16} height={18} />
      </button>
      <button type="button" className="character-menu__button" onClick={handleOpenModal}>
        AGREGAR <UserAddIcon />
      </button>
      <div className={ openList ? "character-menu__list character-menu__list--open" : "character-menu__list"   }>
        <FavItem />
        <FavItem />
        <FavItem />
        <FavItem />
      </div>
    </div>
  );
};
