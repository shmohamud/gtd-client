import { React } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import swal from "@sweetalert/with-react";
import DateAndTimePickers from "../../common/DateAndTimePickers";
import { useApp } from "../../../AppProvider";

export default function EditDialog({ open, handleClose }) {
  const { useAuth, useForm, useProject } = useApp();
  const {token} = useAuth
  const { updateById, project } = useProject;

const onSubmit = async () => {
  const {title, description }= values
  let body = {title, description}
  updateById(token, {}, body)
}

const { handleChange, handleSubmit, values } = useForm(onSubmit);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title">
        <form onChange={handleChange} onSubmit={async(e)=>{await handleSubmit(e)
              swal(
                <div>
                  <h1>Edit Success!</h1>
                </div>
              );
              return handleClose();
            }}>
        <DialogTitle id="form-dialog-title">Project Editor</DialogTitle>
        <DialogContent>
          <DialogContentText>Edit Project Details</DialogContentText>
          <TextField
            autoFocus={true}
            name="title"
            margin="dense"
            id="title"
            label="Project Title"
            type="text"
            fullWidth={true}
            defaultValue={project.title}
          />
          <TextField
            autoFocus={true}
            name="description"
            margin="dense"
            id="description"
            label="Project Description"
            type="text"
            fullWidth={true}
            defaultValue={project.description}
          />
          <DateAndTimePickers />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button type="submit"
            color="secondary"
            onClick={handleSubmit}

          >
            Submit
          </Button>
        </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
