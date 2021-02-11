import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import IncubateDialog from "../../incubate/CreateDialog";
import DeleteDialog from "../DeleteDialog";
import ReferenceDialog from "../../reference/CreateDialog";

const NotActionableDialog = ({ data, getPreviousStep, deleteById}) => {
  const [open, setOpen] = useState(true);
  const [openDialog, setOpenDialog] = useState("");

  const handleClickOpen = (name) => {
    setOpenDialog(name);
  };

  const handleClose = () => {
    setOpenDialog("");
    getPreviousStep();
    setOpen(false);
  };

  const handleCloseOrCancel = () => {
    setOpenDialog("");
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{data.description}</DialogTitle>
        <DialogActions>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleClickOpen("DELETE")}
          >
            Delete
          </Button>
          <DeleteDialog
            open={openDialog === "DELETE"}
            handleCloseOrCancel={handleCloseOrCancel}
            id={data._id}
            deleteById={deleteById}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleClickOpen("INCUBATE")}
          >
            Incubate
          </Button>
          <IncubateDialog
            open={openDialog === "INCUBATE"}
            handleCloseOrCancel={handleCloseOrCancel}
            id={data._id}
            deleteById={deleteById}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => handleClickOpen("REFERENCE")}
          >
            Reference
          </Button>
          <ReferenceDialog
            open={openDialog === "REFERENCE"}
            handleCloseOrCancel={handleCloseOrCancel}
            id={data._id}
            deleteById={deleteById}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default NotActionableDialog;
