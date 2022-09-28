import React from "react";
import Modal from "../../../common/Modal";
import TriggerButton from "../../../common/TriggerButton";
import { useApp } from "../../../../AppProvider";
import styles from "./index.css";

const ReadModal = ({ data }) => {
  const {useProject} = useApp()
  
  if (!data) return null;
  let pTags = [];

  Object.keys(data).length &&
    Object.keys(data).map((k, index) => {
      return pTags.push(
        <p key={index + k}>
          {k.toUpperCase()} : {JSON.stringify(data[k])}
        </p>
      );
    });

  return (
    <Modal>
      <div className="modal-content">
        {pTags}
        <div className="project-button-group">
          <TriggerButton
            isForm={true}
            modalType={"EDIT_PROJECT_MODAL"}
            modalProps={{data}}
            triggerText={"Edit Project"}
          />
          <TriggerButton
            isForm={true}
            modalType={"DELETE_PROJECT_MODAL"}
            modalProps={{data}}
            triggerText={"Delete Project"}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ReadModal;
