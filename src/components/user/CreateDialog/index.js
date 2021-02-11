import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import swal from '@sweetalert/with-react'
import { useApp } from "../../../AppProvider";

const CreateDialog = ({ open, setOpen }) => {
  const { useAuth, useForm } = useApp();
  const { signup } = useAuth;
  const { handleChange, handleSubmit, values } = useForm(signup);

  const handleClose = () => {
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
        <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
        <DialogContent>
          <DialogContentText>It's fast and fruitful.</DialogContentText>
          <TextField
            autoFocus={true}
            name="firstname"
            margin="dense"
            id="firstname"
            label="First name"
            type="text"
            fullWidth={true}
            variant="filled"
          />
          <TextField
            autoFocus={true}
            name="lastname"
            margin="dense"
            id="lastname"
            label="Last name"
            type="text"
            fullWidth={true}
            variant="filled"
          />
          <TextField
            autoFocus={true}
            name="email"
            margin="dense"
            id="email"
            label="Email address"
            type="text"
            fullWidth={true}
            variant="filled"
          />
          <TextField
            autoFocus={true}
            name="username"
            margin="dense"
            id="username"
            label="User name"
            type="text"
            fullWidth={true}
            variant="filled"
          />
          <TextField
            autoFocus={true}
            name="password"
            margin="dense"
            id="password"
            label="New password"
            type="password"
            fullWidth={true}
            variant="filled"
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={async (e) => {
              await handleSubmit(e);
              swal(
                <div>
                  <h1>Sign up success!</h1>
                  <p> Welcome to Metacognizer {values["firstname"]}. Login to get started.</p>
                </div>
              )
              return handleClose();
            }}
            color="primary"
            variant="contained"
          >
            Sign Up
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateDialog;
