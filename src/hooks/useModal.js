import React, { useState } from "react";

export default function useModal() {
  const [modalType, setModalType] = useState(null);
  const [modalProps, setModalProps] = useState([]);

  const showModal = (type) => {
    setModalType(type);
  };

  const hideModal = () => {
    setModalType(null);
  };

  return {
    showModal,
    hideModal,
    modalType,
    modalProps,
  };
}
