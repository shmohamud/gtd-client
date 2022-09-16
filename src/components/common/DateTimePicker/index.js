import React from "react";
import TextField from "@material-ui/core/TextField";
import { useApp } from "../../../AppProvider";

export default function DateTimePicker({ name }) {
  const { useForm } = useApp();
  const { handleChange, values } = useForm();

  return (
    <TextField
      onChange={handleChange}
      id="datetime-local"
      label="Deadline"
      name="deadline"
      type="datetime-local"
      value={values[name]}
      InputLabelProps={{
        shrink: true,
      }}
    />
  );
}
