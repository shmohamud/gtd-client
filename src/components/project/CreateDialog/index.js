import { React } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DateAndTimePickers from "../../common/DateAndTimePickers";
import { useApp } from "../../../AppProvider";

const CreateDialog = ({ open, setOpen }) => {
  const { useProject, useForm } = useApp();
  const { create } = useProject;
  const { handleChange, handleSubmit } = useForm(create);

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

export default CreateDialog;
