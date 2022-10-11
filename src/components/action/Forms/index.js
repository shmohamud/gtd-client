import React, { useEffect } from "react";
import { useApp } from "../../../AppProvider";
import Button from "@material-ui/core/Button";
import DateTimePicker from "react-datetime-picker";
import "./index.css";

//A Form For Creating & Editing Projects
const Form = ({ onSubmit, buttonLabel, defaultValues }) => {
  const { useAuth, useForm, useProject } = useApp();
  const { getAll, projects } = useProject;
  const { handleChange, handleSubmit, values } = useForm(
    onSubmit,
    {},
    defaultValues
  );

  useEffect(() => {
    getAll(useAuth.token);
  }, []);

  return (
    <form onChange={handleChange} onSubmit={handleSubmit}>
      <label for="project">Choose a Project: </label>
      <div className="select">
        <select name="project_id" id="project-select" required>
          <option value="">Select a Project</option>
          {projects.map((project) => {
            return (
              <option key={project._id} value={project._id}>
                {project.title}
              </option>
            );
          })}
        </select>
      </div>
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
      <DateTimePicker
        minDate={new Date()}
        onChange={(value) =>
          handleChange({ target: { value, name: "deadline" } })
        }
        value={values["deadline"] || new Date()}
      />
      {buttonLabel && (
        <Button
          style={{ backgroundColor: "green", color: "white", margin: "1rem" }}
          type="submit"
        >
          {buttonLabel}
        </Button>
      )}
    </form>
  );
};

export default Form;
