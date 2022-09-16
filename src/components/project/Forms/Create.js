import React from "react";
import swal from "@sweetalert/with-react";
import Form from "./index";
import { useApp } from "../../../AppProvider";

const Create = () => {
  const { useAuth, useProject } = useApp();
  const { token } = useAuth;
  const { create } = useProject;

  const onSubmit = async (validity, values) => {
    try {
      await create(token, {}, values);
      swal(
        <div>
          <h1>Add Success!</h1>
        </div>
      );
    } catch (err) {
      swal(
        <div>
          <h1>Add Error: {err} </h1>
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

export default Create;
