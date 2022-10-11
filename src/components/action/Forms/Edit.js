import React from "react";
import Form from "./index";
import swal from "@sweetalert/with-react";
import { useApp } from "../../../AppProvider";

const Edit = ({ data }) => {
  const { useAuth, useModal, useAction } = useApp();
  const { token } = useAuth;
  const { hideModal } = useModal;
  const { updateById } = useAction;

  const onSubmit = async (validity, values) => {
    try {
      await updateById(token, {}, values);
      swal(
        <div>
          <h1>Action Edited!</h1>
        </div>
      );
    } catch (err) {
      swal(
        <div>
          <h1>Error Editing Action</h1>
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
