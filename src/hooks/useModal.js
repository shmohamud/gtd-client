import React, { useState } from "react";

export default function useModal() {
  const [modalType, setModalType] = useState(null);
  const [modalProps, setModalProps] = useState({});

  const showModal = (type, modalProps) => {
    setModalType(type);
    console.log("Type: ", type, "Props: ", modalProps)
    setModalProps(Object.assign({}, modalProps))
  };

  const hideModal = () => {
    setModalType(null);
    setModalProps(null)
  };

  return {
    showModal,
    hideModal,
    modalType,
    modalProps,
  };
}
