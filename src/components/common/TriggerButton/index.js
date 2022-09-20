import React from "react";
import { useApp } from "../../../AppProvider";

const TriggerButton = ({triggerText, modalType, modalProps}) => {
  const { useModal } = useApp();
  const { showModal } = useModal;
  const trigger = () => {
    showModal(modalType, modalProps);
  };
  return <button onClick={trigger}>{triggerText}</button>;
};

export default TriggerButton;
