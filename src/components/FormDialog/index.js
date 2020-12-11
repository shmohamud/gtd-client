import { React, useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DateAndTimePickers from "../../components/DateAndTimePickers";
import useForm from "../../hooks/useForm";

//TODO: Make Generic! Add buttonText, dialogContentText, textField objects array [{label, name, type, styles, etc}]

export default function FormDialog({
  open,
  setOpen,
  onSubmit,
  btnTexts,
  dialogContentText,
textFields,
  dialogTitleText,
}) {
  const { handleChange, handleSubmit, values } = useForm(onSubmit);

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
        <DialogTitle id="form-dialog-title">{dialogTitleText}</DialogTitle>
        <DialogContent>
          <DialogContentText>{dialogContentText}</DialogContentText>
          {textFields && textFields.map((field) => <TextField {...field} />)}
          <DateAndTimePickers />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            {btnTexts.close}
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {btnTexts.submit}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
