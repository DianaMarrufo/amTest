import React from 'react'
import { CloseIcon } from '../../../assets/svg'
import './AppModal.scss'

export const AppModal = ( { children, show, showModal } ) => {

  const handleCloseModal = () => {
    showModal(false)
  }

  return show ? (
    <div className='modal' onClick={handleCloseModal}>
      <div className='modal__content' onClick={ e => e.stopPropagation() }>
        <button type="button" className='modal__content-close' onClick={handleCloseModal}>
          <CloseIcon />
        </button>
        <div className='modal__content-body'>
          { children }
        </div>
      </div>
    </div>
  ) : null
}
