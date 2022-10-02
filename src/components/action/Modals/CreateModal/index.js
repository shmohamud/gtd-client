import { React } from "react";
import Form from "../../Forms/Create";
import Modal from "../../../common/Modal";
import { useApp } from "../../../../AppProvider";
import Button from "@material-ui/core/Button";
import styles from "./index.css";

const CreateModal = () => {
  const { useModal } = useApp();
  const { hideModal } = useModal;

  return (
    <Modal>
      <div className="modal-content">
        <Form />
        <Button
          style={{
            backgroundColor: "white",
            color: "red",
            border: "1px solid red",
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

export default CreateModal;
