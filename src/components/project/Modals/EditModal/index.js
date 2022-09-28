import { React } from "react";
import Form from "../../Forms/Edit";
import Modal from "../../../common/Modal";
import { useApp } from "../../../../AppProvider";
import Button from "@material-ui/core/Button"
import swal from "@sweetalert/with-react";
import styles from "./index.css";

const EditModal = ({ data }) => {
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
      console.log("Error: ", err);
    }
    hideModal();
  };

  return (
    <Modal>
      <div className="modal-content">
        <Form onSubmit={onSubmit} defaultValues={data} />
        <Button
          style={{
            backgroundColor: "white",
            color: "black",
            border: "1px solid black",
          }}
          onClick={hideModal}
          color="primary"
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default EditModal;
