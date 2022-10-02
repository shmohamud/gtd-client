import React from "react";
import CreateProjectModal from "../../project/Modals/CreateModal";
import EditProjectModal from "../../project/Modals/EditModal";
import ReadProjectModal from "../../project/Modals/ReadModal";
import DeleteProjectModal from "../../project/Modals/DeleteModal"; 
import CreateActionModal from "../../action/Modals/CreateModal";
import EditActionModal from "../../action/Modals/EditModal";
import ReadActionModal from "../../action/Modals/ReadModal";
import DeleteActionModal from "../../action/Modals/DeleteModal"; 
import StepperModal from "../StepperModal"

const MODAL_COMPONENTS = {
  CREATE_PROJECT_MODAL: CreateProjectModal,
  READ_PROJECT_MODAL: ReadProjectModal,
  EDIT_PROJECT_MODAL: EditProjectModal,
  DELETE_PROJECT_MODAL: DeleteProjectModal,
  CREATE_ACTION_MODAL: CreateActionModal,
  READ_ACTION_MODAL: ReadActionModal,
  EDIT_ACTION_MODAL: EditActionModal,
  DELETE_ACTION_MODAL: DeleteActionModal,
  STEPPER_MODAL: StepperModal
};

const ModalRoot = ({ modalType, modalProps }) => {
  //If there's no modal type in state, don't show modal.
  if (!modalType) return null;

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

export default ModalRoot;
