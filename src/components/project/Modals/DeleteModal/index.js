import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "../../../common/Modal";
import TriggerButton from "../../../common/TriggerButton";
import swal from "@sweetalert/with-react";
import { useApp } from "../../../../AppProvider";
import styles from "./index.css";

const DeleteModal = ({ data }) => {
  const { useAuth,useModal, useProject } = useApp();
  const { token } = useAuth;
  const { hideModal } = useModal
  const { deleteById } = useProject;


  if (!data) return null;

  //TODO: cleanup double loop / imperative display of data

  return (
    <Modal>
      <div className="modal-content">
      <p>Are you sure you want to <span style={{color:"red", fontWeight:"bold"}}>Delete</span> Project: ${data._id}?</p>
      <div className="project-button-group">
        <Button
          style={{backgroundColor:"rgb(234,66,53)"}}
          onClick={async () => {
            deleteById(token, data._id);
            swal(
              <div>
                <h1>Project Deleted!</h1>
              </div>
            );
            hideModal()
          }}
        >
          Yes
        </Button>
        <TriggerButton
          triggerText={"No"}
          modalType={"READ_PROJECT_MODAL"}
          modalProps={data}
        />
      </div>
      </div>
    </Modal>
  );
};

export default DeleteModal;
