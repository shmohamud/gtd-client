import React from "react";
import Form from "./index";
import swal from "@sweetalert/with-react";
import { useApp } from "../../../AppProvider";

const Edit = ({ data }) => {
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
    <div>
      <Form onSubmit={onSubmit} buttonLabel={"Save"} defaultValues={data} />
    </div>
  );
};

export default Edit;
