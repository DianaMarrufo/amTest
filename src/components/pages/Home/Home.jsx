import React, { useState } from 'react'
import { AppLogo } from '../../../assets/svg'
import { AppModal } from '../../atoms/AppModal'
import { CharacterFilter } from '../../organisms/CharacterFilter'
import { CharacterList } from '../../organisms/CharacterList'
import { CharacterMenu } from '../../organisms/CharacterMenu'
import styles from './Home.module.scss'

export const Home = () => {

  const [openModal, setOpenModal] = useState(false)

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <CharacterMenu showModal={ setOpenModal } />
        <div className={styles.home__logo}>
          <AppLogo />
        </div>
        <CharacterFilter />
        <CharacterList />
      </div>
      <AppModal show={openModal} showModal={ setOpenModal } />
    </div>
  )
}
