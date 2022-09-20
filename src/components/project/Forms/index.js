import React from "react";
import { useApp } from "../../../AppProvider";
import DateTimePicker from "../../common/DateTimePicker";

const Form = ({ onSubmit, buttonLabel }) => {
  const { useForm } = useApp();
  const { handleChange, handleSubmit, values } = useForm(onSubmit);


  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={values["title"]}
        required
      />
      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={values["description"]}
        required
      />

      <DateTimePicker name={"deadline"} />
      {buttonLabel && <button type="submit">{buttonLabel}</button>}
    </form>
  );
};

export default Form;
