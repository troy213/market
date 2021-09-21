import React from 'react'
import ReactDOM from 'react-dom'
import './Modal.css'

const Modal = ({ open, children, onClose }) => {
  if (!open) {
    return null
  }

  return ReactDOM.createPortal(
    <div className='modal'>
      <div className='modal-container'>
        <span className='modal-close' onClick={onClose}>
          &times;
        </span>
        {children}
      </div>
    </div>,
    document.getElementById('portal')
  )
}

export default Modal
