import React from 'react'
import styles from './Layout.module.scss'

export const Layout = ({ children }) => {
  return (
    <main>
      <div className={styles.layout}>
        {children}
      </div>
    </main>
  )
}
