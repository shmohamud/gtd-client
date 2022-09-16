import React from "react";
import swal from "@sweetalert/with-react";
import Form from "./index";
import { useApp } from "../../../AppProvider";

const Edit = () => {
  const { useAuth, useProject } = useApp();
  const { token } = useAuth;
  const { updateById } = useProject;

  const onSubmit = async (validity, values) => {
    try {
      await updateById(token, {}, values);
      swal(
        <div>
          <h1>Edit Success!</h1>
        </div>
      );
    } catch (err) {
      swal(
        <div>
          <h1>Edit Error: {err} </h1>
        </div>
      );
      console.log("Error: ", err);
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit} buttonLabel={"Save"} />
    </div>
  );
};

export default Edit;
