import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterStaff,
  filterStudents,
} from "../../../features/characters/characterSlice";
import { AppButton } from "../../atoms/AppButton";
import "./CharacterFilter.scss";

export const CharacterFilter = () => {
  const { studentsActive, staffActive } = useSelector(
    (state) => state.character,
  );
  const dispatch = useDispatch();

  const handleFilterStudents = () => {
    dispatch(filterStudents());
  };

  const handleFilterStaff = () => {
    dispatch(filterStaff());
  };

  return (
    <div className="character-filter">
      <div className="character-filter__title">Selecciona tu filtro</div>
      <div className="character-filter__buttons">
        <AppButton
          title="ESTUDIANTES"
          loading={false}
          active={studentsActive}
          method={handleFilterStudents}
        />
        <AppButton
          title="STAFF"
          active={staffActive}
          method={handleFilterStaff}
        />
      </div>
    </div>
  );
};
