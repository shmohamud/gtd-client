import React from "react";
import { useApp } from "../../../AppProvider";
import Button from "@material-ui/core/Button"
import DateTimePicker from 'react-datetime-picker';

//A Form For Creating & Editing Projects
const Form = ({ onSubmit, buttonLabel, defaultValues }) => {
  const { useForm } = useApp();
  const { handleChange, handleSubmit, values } = useForm(onSubmit, {}, defaultValues);

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
      <DateTimePicker minDate={new Date() }onChange={value => handleChange ({target: {value, name: 'deadline'}})} value={values["deadline"] || new Date()}  />
      {buttonLabel && <Button style={{backgroundColor:"green", color:"white", margin:"1rem"}} type="submit" >{buttonLabel}</Button>}
    </form>
  );
};

export default Form;
