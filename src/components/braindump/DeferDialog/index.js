import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import CreateDialog from "../../project/CreateDialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useApp } from "../../../AppProvider";

const DeferDialog = ({ braindump }) => {
  const [open, setOpen] = useState(true);
  const [openDialog, setOpenDialog] = useState("");
  const { useProject } = useApp();
  const { create } = useProject;
  const handleClickOpen = (name) => {
    setOpenDialog(name);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickCancel = () => {
    console.log("CANCEL HANDLED!!!");
    setOpenDialog("");
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{braindump.description}</DialogTitle>
        <DialogActions>
          <label for="projects">Select Existing Project: </label>
          <select name="projects" id="projects" selected>
            Select Project
            <option value="">Select your option</option>
            <option value="complete-gtd-frontend">Complete GTD Frontend</option>
          </select>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleClickOpen("PROJECT")}
          >
            Defer
          </Button>
          <CreateDialog
            open={openDialog === "PROJECT"}
            setOpen={setOpen}
            onSubmit={async (validity, values) => create(validity, values)}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeferDialog;
