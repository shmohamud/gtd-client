import { React, useState, useEffect } from "react";
import swal from "@sweetalert/with-react";
import { useApp } from "../../../AppProvider";
import styles from "./index.css";
import Modal from "../../common/Modal";

export default function CreateModal({ hasDeadline, delegate }) {
  const { useAuth, useForm, useAction, useProject } = useApp();
  const { token } = useAuth;
  const { create, deleteById } = useAction;
  const { projects } = useProject;

  const onSubmit = async (validity, values) => {
    if (hasDeadline === undefined) {
      await create(token, {}, values);
      swal(
        <div>
          <h1>Action Created!</h1>
        </div>
      );
      await deleteById(token);
    } else if (
      hasDeadline &&
      values["deadline"] !== "undefined" &&
      validity["deadline"]
    ) {
      await create(token, {}, values);
      swal(
        <div>
          <h1>Action Created!</h1>
        </div>
      );
      await deleteById(token);
    } else {
      alert(
        'Please select a deadline or go back and select "No" for "has concrete deadline" question'
      );
    }
  };

  const validationSchema = {
    deadline: (date) => {
      const today = new Date();
      const deadline = new Date(date);
      if (deadline > today) {
        return true;
      } else {
        return false;
      }
    },
  };

  const { handleChange, handleSubmit, setValues } = useForm(
    onSubmit,
    validationSchema
  );

  useEffect(() => {
    if (delegate) {
      setValues((values) => {
        return { ...values, type: "delegate" };
      });
    }
  }, []);

  const setDeadline = (e) => {
    setDeadline(e.target.value);
    setValues((values) => {
      return { ...values, type: "delegate" };
    });
  };

  return (
    <Modal>
      <div className="create-modal">
        <h2>New Action</h2>
        <form onChange={handleChange} onSubmit={handleSubmit}>
          <label for="project">Choose a Project: </label>
          <div class="select">
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
          <label for="description">Description</label>
          <input
            type="text"
            name="description"
            placeholder="Description"
            required
          />
          <div class="select">
            <select name="type" id="type-select" required>
              <option value="">Select Type</option>
              <option key={"321jlkjxfdsaf3"} value={"call"}>
                Call
              </option>
              <option key={"1230092i3321jlkjxfdsaf3"} value={"code"}>
                Code
              </option>
              <option key={"909103321jlkjxfdsaf3"} value={"hangout"}>
                Hangout
              </option>
            </select>
          </div>
          <div className="radio-group">
            <fieldset>
              <legend>Choose Priority Level</legend>
              <label for="low">Low</label>
              <input type="radio" id="low" name="priroity" value="low" />
              <label for="medium">Medium</label>
              <input type="radio" id="medium" name="priroity" value="medium" />
              <label for="high">High</label>
              <input type="radio" id="high" name="priroity" value="high" />
            </fieldset>
          </div>
          <div className="radio-group">
            <fieldset>
              <legend>Choose a Setting</legend>
              <label for="home">Home</label>
              <input type="radio" id="home" name="setting" value="home" />
              <label for="commute">Commuting</label>
              <input
                type="radio"
                id="commute"
                name="setting"
                value="commuting"
              />
              <label for="club">Club</label>
              <input type="radio" id="club" name="setting" value="club" />
            </fieldset>
          </div>
          <input type="submit" />
        </form>
      </div>
    </Modal>
  );
}
