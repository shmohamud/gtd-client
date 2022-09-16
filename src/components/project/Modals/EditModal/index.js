import { React } from "react";
import swal from "@sweetalert/with-react";
import Form from "../../Forms/Edit";
import Modal from "../../../common/Modal";
import { useApp } from "../../../../AppProvider";
import styles from './index.css'

const EditModal = () => {
  const { useAuth, useModal, useProject } = useApp();
  const { token } = useAuth;
  const { hideModal } = useModal;
  const { updateById } = useProject;


  const onSubmit = async (validity, values) => {
    try {
      await updateById(token, {}, values);
      swal(
        <div>
          <h1>Project Edited!</h1>
        </div>
      );
    } catch (err) {
      swal(
        <div>
          <h1>Error Editing Project</h1>
        </div>
      );
      console.log("Error: ", err)
    }
  };

  return (
    <Modal >
      <div className="modal-content">
          <Form onSubmit={onSubmit} />
          <button onClick={hideModal} color="primary">
            Cancel
          </button>
      </div>
    </Modal>
  );
};

export default EditModal;
