import React from "react";
import CreateProjectModal from "../../project/Modals/CreateModal";
import EditProjectModal from "../../project/Modals/EditModal";
import ReadProjectModal from "../../project/Modals/ReadModal";
import DeleteProjectModal from "../../project/Modals/DeleteModal"; 

const MODAL_COMPONENTS = {
  CREATE_PROJECT_MODAL: CreateProjectModal,
  READ_PROJECT_MODAL: ReadProjectModal,
  EDIT_PROJECT_MODAL: EditProjectModal,
  DELETE_PROJECT_MODAL: DeleteProjectModal,
};

const ModalRoot = ({ modalType, modalProps }) => {
  //If there's no modal type in state, don't show modal.
  if (!modalType) return null;

  const SpecificModal = MODAL_COMPONENTS[modalType];
  return <SpecificModal {...modalProps} />;
};

export default ModalRoot;
