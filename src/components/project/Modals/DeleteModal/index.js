import React from "react";
import Button from "@material-ui/core/Button";
import Modal from "../../../common/Modal";
import TriggerButton from "../../../common/TriggerButton";
import swal from "@sweetalert/with-react";
import { useApp } from "../../../../AppProvider";
import styles from "./index.css";

const DeleteModal = ({ data }) => {
  const { useAuth, useProject } = useApp();
  const { token } = useAuth;
  const { deleteById } = useProject;

  if (!data) return null;

  //TODO: cleanup double loop / imperative display of data

  return (
    <Modal>
      {Object.keys(data).length &&
        Object.keys(data).map((k) => {
          return (
            <p>
              {k.toUpperCase()} : {JSON.stringify(data[k])}
            </p>
          );
        })}
      <div className="project-button-group">
        <Button
          variant="outlined"
          color="primary"
          onClick={async () => {
            deleteById(token);
            swal(
              <div>
                <h1>Project Deleted!</h1>
              </div>
            );
          }}
        >
          Delete
        </Button>
        <TriggerButton
          triggerText={"Cancel"}
          modalType={"READ_PROJECT_MODAL"}
          modalProps={data}
        />
      </div>
    </Modal>
  );
};

export default DeleteModal;
