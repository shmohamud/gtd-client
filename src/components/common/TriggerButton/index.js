import React from "react";
import Button from "@material-ui/core/Button"
import { useApp } from "../../../AppProvider";

const TriggerButton = ({modalType, modalProps, triggerText}) => {
  const { useModal } = useApp();
  const { showModal } = useModal;


  const onTrigger = () => {
    showModal(modalType, modalProps);
  };
  return <Button onClick={onTrigger}>{triggerText}</Button>;
};

export default TriggerButton;
