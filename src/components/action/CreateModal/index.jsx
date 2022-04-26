import { React, useState, useEffect } from "react";
import swal from "@sweetalert/with-react";
import { useApp } from "../../../AppProvider";
import Modal from "../../common/Modal";

export default function CreateModal({
  data,
  hasDeadline,
  delegate,
  deleteById,
}) {
  const [open, setOpen] = useState(true);
  const { useAuth, useForm, useAction, useProject } = useApp();
  const { token } = useAuth;
  const { create } = useAction;
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

  const handleClose = () => {
    setOpen(false);
  };

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
      <form onChange={handleChange} onSubmit={handleSubmit} method="GET" action="#">
        <label>Choose a Project: </label>
        <div class="select">
          <select id="project-select">
            <option>Select a Project</option>
         {projects.map(project => {
             <option key={project._id}>{project.title}</option>
         })}
          </select>
        </div>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <input type="submit" />
      </form>
      </div>
    </Modal>
  );
}
