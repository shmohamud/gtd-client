import React from "react";
import styles from "./index.css";
import { useApp } from "../../../AppProvider";

const Modal = ({ children, height, width }) => {
  const { useModal } = useApp();
  const { hideModal } = useModal;
  return (
    <div className="modal">
      {children}
      <button className="close-button" onClick={hideModal}>
        X
      </button>
    </div>
  );
};

export default Modal;
