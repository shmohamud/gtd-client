import { React, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DateAndTimePickers from "../../common/DateAndTimePickers";
import { useApp } from "../../../AppProvider";

const EditDialog = ({
  open,
  setOpen
}) => {
  const { useForm, useAction } = useApp();
  const { updateById, action} = useAction;

  const { handleChange, handleSubmit} = useForm(updateById);
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
        <DialogTitle id="form-dialog-title">Edit Action Details</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit action type and details below. </DialogContentText>
          <TextField
            autoFocus="true"
            name="type"
            margin="dense"
            id="type"
            label="Action Type"
            type="text"
            fullWidth="true"
            defaultValue={action.type}
          />
          <TextField
            autoFocus="true"
            name="description"
            margin="dense"
            id="description"
            label="Action Description"
            type="text"
            fullWidth="true"
            defaultValue={action.description}
          />
          <DateAndTimePickers />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={async(e)=>{await handleSubmit(e);return handleClose()}} color="secondary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditDialog;
