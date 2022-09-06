import { React } from "react";
import Modal from "../../common/Modal"
import DateAndTimePickers from "../../common/DateAndTimePickers";
import swal from "@sweetalert/with-react";
import { useApp } from "../../../AppProvider";
import styles from './index.css'

const CreateModal = () => {
  const { useAuth, useForm, useModal, useProject } = useApp();
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
  };
  const { handleChange, handleSubmit } = useForm(onSubmit);


  return (
    <Modal >
      <div className="modal-content">
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" placeholder="Title" required />
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            required
          />

          <DateAndTimePickers />
          <button onClick={hideModal} color="primary">
            Cancel
          </button>
          <input type="submit" value="Create"/>
        </form>
      </div>
    </Modal>
  );
};

export default CreateModal;
