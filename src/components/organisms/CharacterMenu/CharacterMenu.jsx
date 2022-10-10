import React, { useState } from "react";
import "./CharacterMenu.scss";
import { FavIcon, UserAddIcon } from "../../../assets/svg";
import { FavItem } from "../../atoms/FavItem/FavItem";
import { useSelector } from "react-redux";

export const CharacterMenu = ({ showModal }) => {
  const [openList, setOpenList] = useState(false);

  const { favorites } = useSelector((state) => state.character);

  const handleOpenFavList = (e) => {
    e.preventDefault();
    setOpenList((prev) => !prev);
  };

  const handleOpenModal = () => {
    showModal(true);
  };

  return (
    <div className="character-menu">
      <button
        type="button"
        className="character-menu__button"
        onClick={(e) => handleOpenFavList(e)}
      >
        FAVORITOS <FavIcon width={16} height={18} stroke="#FFF" />
      </button>
      <button
        type="button"
        className="character-menu__button"
        onClick={handleOpenModal}
      >
        AGREGAR <UserAddIcon />
      </button>
      <div
        className={
          openList
            ? "character-menu__list character-menu__list--open"
            : "character-menu__list"
        }
      >
        {favorites?.length > 0 ? (
          favorites.map((fav) => <FavItem key={"fav-item"+fav.name+fav.id} name={fav.name} image={fav.image} id={fav.id} />)
        ) : (
          <div className="character-menu__empty"> No hay elementos </div>
        )}
      </div>
    </div>
  );
};
