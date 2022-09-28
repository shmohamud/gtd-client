import { React } from "react";
import Form from "../../Forms/Create";
import Modal from "../../../common/Modal";
import { useApp } from "../../../../AppProvider";
import Button from "@material-ui/core/Button"
import swal from "@sweetalert/with-react";
import styles from './index.css'

const CreateModal = () => {
  const { useAuth, useModal, useProject } = useApp();
  const { token } = useAuth;
  const { hideModal } = useModal;
  const { create } = useProject;


  const onSubmit = async (validity, values) => {
    try {
      await create(token, {}, values);
      swal(
        <div>
          <h1>Project Created!</h1>
        </div>
      );
    } catch (err) {
      swal(
        <div>
          <h1>Error Creating Project</h1>
        </div>
      );
      console.log("Error: ", err)
    }
    hideModal()
  }

  return (
    <Modal >
      <div className="modal-content">
          <Form onSubmit={onSubmit} buttonLabel={"Save"}/>
          <Button  style={{backgroundColor:"white", color:"red", border:"1px solid red"}}  onClick={hideModal} color="primary">
            Cancel
          </Button>
      </div>
    </Modal>
  );
};

export default CreateModal;
