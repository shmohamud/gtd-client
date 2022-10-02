import { React } from "react";
import Form from "../../Forms/Edit";
import Modal from "../../../common/Modal";
import { useApp } from "../../../../AppProvider";
import Button from "@material-ui/core/Button";
import styles from "./index.css";

const EditModal = ({ data }) => {
  const { useModal } = useApp();
  const { hideModal } = useModal;

  return (
    <Modal>
      <div className="modal-content">
        <Form data={data} />
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
