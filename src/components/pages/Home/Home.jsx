import React from 'react'
import { AppLogo } from '../../../assets/svg'
import { CharacterFilter } from '../../organisms/CharacterFilter'
import { CharacterList } from '../../organisms/CharacterList'
import styles from './Home.module.scss'

export const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <div className={styles.home__logo}>
          <AppLogo />
        </div>
        <CharacterFilter />
        <CharacterList />
      </div>
    </div>
  )
}
