import React from "react";
import Modal from "../../../common/Modal";
import TriggerButton from "../../../common/TriggerButton"
import { useApp } from "../../../../AppProvider";
import styles from "./index.css";

const ReadModal = ({ data }) => {
  if (!data) return null;
  let pTags = []
  Object.keys(data).length &&
    Object.keys(data).map((k) => {
      return (
        pTags.push( <p>
          {k.toUpperCase()} : {JSON.stringify(data[k])}
        </p>)
       
      );
    })
  return (
    <Modal>
        <div className="project-button-group">
          <TriggerButton triggerText={"Edit Project"} modalType={"EDIT_PROJECT_MODAL"} modalProps={data}/>
          <TriggerButton triggerText={"Delete Project"} modalType={"DELETE_PROJECT_MODAL"} modalProps={data}/>
        </div>
    </Modal>
  );
};

export default ReadModal;
