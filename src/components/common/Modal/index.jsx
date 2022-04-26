import React from 'react'
import styles from './index.css'
const Modal = ({children, height, width}) => {
    return (
        <div className="modal">
            {children}
        </div>
    )
}

export default Modal
