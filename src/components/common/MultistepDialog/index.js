import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DateAndTimePickers from "../../common/DateAndTimePickers";
import swal from '@sweetalert/with-react';
import { useApp } from "../../../AppProvider";

const MultistepDialog = ({
  open,
  setOpen,
  data,
  getPreviousStep,
  deleteById,
}) => {
  const { useAuth, useProject, useForm } = useApp();
  const { token } = useAuth;
  const { create } = useProject;

  const onSubmit = async (validity, values) => {
    if (values["deadline"] !== "undefined" && validity["deadline"]) {
      await create(token, {}, values);
      await deleteById(token, data._id);
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

  const { handleChange, handleSubmit } = useForm(onSubmit, validationSchema);

  const handleClose = () => {
    getPreviousStep();
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onChange={handleChange}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create a Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a title and description for the project
          </DialogContentText>
          <TextField
            autoFocus={true}
            name="title"
            margin="dense"
            id="title"
            label="Project Title"
            type="text"
            fullWidth={true}
          />
          <TextField
            autoFocus={true}
            name="description"
            margin="dense"
            id="description"
            label="Project Description"
            type="text"
            fullWidth={true}
          />
          <DateAndTimePickers />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={async (e) => {
              await handleSubmit(e);
              swal(
                <div>
                  <h1>Project Created!</h1>
                </div>
              )
              return handleClose();
            }}
            color="secondary"
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default MultistepDialog;
