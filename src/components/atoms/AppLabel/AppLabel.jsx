import React from 'react'
import './AppLabel.scss'

export const AppLabel = ({ htmlFor, title }) => {
  return (
    <label className='app-label' htmlFor={ htmlFor } > { title } </label>
  )
}
