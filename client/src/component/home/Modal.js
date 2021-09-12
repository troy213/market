import React from 'react'

const Modal = ({ open, children, onClose }) => {
  if (!open) {
    return null
  }

  return (
    <div className='modal'>
      <div className='modal-container'>
        <span className='modal-close' onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>
  )
}

export default Modal
