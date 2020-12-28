import { React } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DateAndTimePickers from "../../common/DateAndTimePickers";
import useForm from "../../../hooks/useForm";
import { projectTextFields } from "../constants";

export default function CreateDialog({ open, setOpen, onSubmit }) {
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
        <DialogTitle id="form-dialog-title">Create Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a title and description for the project
          </DialogContentText>
          {projectTextFields({}) &&
            projectTextFields({}).map((field) => <TextField {...field} />)}
          <DateAndTimePickers />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={(e)=>{handleSubmit(e); return handleClose()}} color="secondary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
