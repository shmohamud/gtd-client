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

export default function EditDialog({ open, handleClose }) {
  const { useForm, useProject } = useApp();
  const { updateById, project } = useProject;
  const { handleChange, handleSubmit } = useForm(updateById);

  return (
    <div>
      <Dialog
        open={open}
        onChange={handleChange}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Project Editor</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit Project Details</DialogContentText>
          <TextField
            autoFocus="true"
            name="title"
            margin="dense"
            id="title"
            label="Project Title"
            type="text"
            fullWidth="true"
            defaultValue={project.title}
          />
          <TextField
            autoFocus="true"
            name="description"
            margin="dense"
            id="description"
            label="Project Description"
            type="text"
            fullWidth="true"
            defaultValue={project.title}
          />
          <DateAndTimePickers />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button
            onClick={async (e) => {
              await handleSubmit(e);
              return handleClose();
            }}
            color="secondary"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
