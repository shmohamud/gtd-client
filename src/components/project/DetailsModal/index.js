import React, { useState } from "react";
import Modal from "../../common/Modal";
import Button from "@material-ui/core/Button";
import swal from "@sweetalert/with-react";
import styles from "./index.css";
import EditDialog from "../EditDialog";
import { useApp } from "../../../AppProvider";

const DetailsModal = ({ data, select }) => {
  const [edit, setEdit] = useState(false);
  const { useAuth, useProject } = useApp();
  const { token } = useAuth;
  const { deleteById } = useProject;

  const handleOpenEditor = () => {
    select(data);
    setEdit(true);
  };

  const handleCloseEditor = () => {
    setEdit(false);
  };

  if (!data) return null;
  return (
    <Modal>
      <div className="modal-content">
        <h2> Project Details </h2>
        {Object.keys(data).length &&
          Object.keys(data).map((k) => {
            return (
              <p>
                {k.toUpperCase()} : {JSON.stringify(data[k])}
              </p>
            );
          })}
        ;
        <div>
          <Button variant="outlined" color="primary" onClick={handleOpenEditor}>
            Edit Project
          </Button>
          <EditDialog open={edit} handleClose={handleCloseEditor} />
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
            Delete Project?
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DetailsModal;
