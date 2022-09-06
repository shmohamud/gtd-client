import React from "react";
import styles from "./index.css";
import { useApp } from "../../../AppProvider";

const Modal = ({ children }) => {
  const { useModal } = useApp();
  const { hideModal } = useModal;

  const handleClick = (e) => {
    const clickedContent = e.target.closest(".modal-content");
    if (!clickedContent) {
      hideModal();
    }
  };
  return (
    <div onClick={handleClick} className="modal">
      {children}
    </div>
  );
};

export default Modal;
