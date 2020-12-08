import { React, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DateAndTimePickers from "../../common/DateAndTimePickers";
import useForm from "../../hooks/useForm";


//TODO: Make Generic! Add buttonText, dialogContentText, textField objects array [{label, name, type, styles, etc}]
 
export default function FormDialog({ open, setOpen }) {
  const onSubmit = (validity, values) => {
    console.log("on submit");
    fetch("http://localhost:4000/projects/create", {
      method: "POST",
      body: JSON.stringify(values),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    setOpen(false);
  };
  const { handleChange, handleSubmit, values } = useForm(onSubmit);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Create New Project
      </Button>
      <Dialog
        open={open}
        onChange={handleChange}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Project Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a title, description and deadline for completion.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Project Title"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            name="description"
            margin="dense"
            id="description"
            label="Project Description"
            type="text"
            fullWidth
          />
          <DateAndTimePickers />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
