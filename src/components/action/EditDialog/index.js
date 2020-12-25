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
  data,
  open,
  setOpen,
  dialogContentText,
  dialogTitleText,
  textFields,
  btnTexts
}) => {
  const { useForm, useAction } = useApp()

  const {updateById, getAll, actions} = useAction
  const onSubmit = () => {
      console.log("IN ON SUBMIT UPDATE BY ID", data._id, values)
      const id = data._id
    updateById(id, values)
    setOpen(false)
}

 const {handleChange, handleSubmit, values} = useForm(onSubmit)
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(()=>{
     getAll().then(actions => console.log("ACTIONS: ", actions))
  },[])



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
            Close
          </Button>
          <Button onClick={handleSubmit} color="secondary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditDialog;
