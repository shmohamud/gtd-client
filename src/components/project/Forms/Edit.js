import React from "react";
import Form from "./index";

const Edit = ({ defaultValues, onSubmit }) => {
  return (
    <div>
      <Form
        onSubmit={onSubmit}
        buttonLabel={"Save"}
        defaultValues={defaultValues}
      />
    </div>
  );
};

export default Edit;
