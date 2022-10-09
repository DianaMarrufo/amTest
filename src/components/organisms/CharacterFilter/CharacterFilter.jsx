import React from 'react'
import { AppButton } from '../../atoms/AppButton'
import './CharacterFilter.scss'

export const CharacterFilter = () => {
  return (
    <div className='character-filter'>
      <div className='character-filter__title'>Selecciona tu filtro</div>
      <div className='character-filter__buttons'>
        <AppButton title="ESTUDIANTES" loading={false} active={true}  />
        <AppButton title="STAFF" active={false}  />
      </div>
    </div>
  )
}
