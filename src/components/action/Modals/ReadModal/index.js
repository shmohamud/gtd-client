import React from "react";
import Modal from "../../../common/Modal";
import TriggerButton from "../../../common/TriggerButton";
import { useApp } from "../../../../AppProvider";
import styles from "./index.css";

const ReadModal = ({ data }) => {
  const {useAction} = useApp()
  
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
        <div className="action-button-group">
          <TriggerButton
            isForm={true}
            modalType={"EDIT_ACTION_MODAL"}
            modalProps={{data}}
            triggerText={"Edit Action"}
          />
          <TriggerButton
            isForm={true}
            modalType={"DELETE_ACTION_MODAL"}
            modalProps={{data}}
            triggerText={"Delete Action"}
          />
        </div>
      </div>
    </Modal>
  );
};

export default ReadModal;
