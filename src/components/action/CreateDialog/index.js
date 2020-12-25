import { React, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DateAndTimePickers from "../../common/DateAndTimePickers";
import { useApp } from "../../../AppProvider";
import {actionTextFields} from '../constants';

export default function CreateDialog({
  open,
  setOpen,
  onSubmit,
  dialogContentText,
  dialogTitleText,
  id
}) {
  const { useForm } = useApp();
  const { handleChange, handleSubmit, setValues, values } = useForm(onSubmit);

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    setValues((values) => {
      return { ...values, id };
    });
  }, []);

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
          {actionTextFields && actionTextFields.map((field) => <TextField {...field} />)}
          <DateAndTimePickers />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CLOSE
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            ADD
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
