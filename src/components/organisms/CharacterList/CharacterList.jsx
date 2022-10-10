import React from "react";
import { useSelector } from "react-redux";
import { CharacterCard } from "../../molecules/CharacterCard";
import "./CharacterList.scss";

export const CharacterList = () => {
  const { charactersList } = useSelector((state) => state.character);
  
  return (
    <div className="character-list">
      {charactersList.map((character) => (
        <CharacterCard key={"character-card-"+character.name+character.id} character={character} />
      ))}
    </div>
  );
};
