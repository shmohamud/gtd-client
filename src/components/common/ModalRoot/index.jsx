import React from "react";
import TestModal from "../../action/TestModal";
import CreateActionModal from "../../action/CreateModal";

const MODAL_COMPONENTS = {
  TEST: TestModal,
  CREATE_ACTION_MODAL: CreateActionModal,
};

const ModalRoot = ({ modalType, modalProps }) => {
  //If there's no modal type in state, don't show modal.
  if (!modalType) return null;

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

export default ModalRoot;
