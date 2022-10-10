import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppLogo } from "../../../assets/svg";
import { getCharacters, reset } from "../../../features/characters/characterSlice";
import { AppModal } from "../../atoms/AppModal";
import { AppSpinner } from "../../atoms/AppSpinner";
import { CharacterForm } from "../../molecules/CharacterForm/CharacterForm";
import { CharacterFilter } from "../../organisms/CharacterFilter";
import { CharacterList } from "../../organisms/CharacterList";
import { CharacterMenu } from "../../organisms/CharacterMenu";
import styles from "./Home.module.scss";

export const Home = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, message } = useSelector(
    (state) => state.character,
  );
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    dispatch(getCharacters());
    return () => {
      dispatch(reset());
    };
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <AppSpinner />;
  }

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <CharacterMenu showModal={setOpenModal} />
        <div className={styles.home__logo}>
          <AppLogo />
        </div>
        <CharacterFilter />
        <CharacterList/>
      </div>
      <AppModal show={openModal} showModal={setOpenModal}>
        <CharacterForm />
      </AppModal>
    </div>
  );
};
