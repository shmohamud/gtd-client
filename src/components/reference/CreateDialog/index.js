import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import UrlInput from "../UrlInput";
import NoteInput from "../NoteInput";
import { useApp } from "../../../AppProvider";

export default function CreateDialog({ open, handleCloseOrCancel, id, onProcessed}) {
  const [urls, setUrls] = useState([]);
  const { useForm, useReference, useBraindump } = useApp();
  const { create } = useReference;
  const { deleteById } = useBraindump;
  const { handleChange, values } = useForm(create);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleCloseOrCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Reference</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Click Reference to add to your Reference List.
          </DialogContentText>
          <UrlInput
            urls={urls}
            setUrls={setUrls}
            values={values["note"]}
            handleChange={handleChange}
          />
          <NoteInput values={values} handleChange={handleChange} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseOrCancel} color="primary">
            Cancel
          </Button>
          <Button
            onClick={async () => {create(values, urls); deleteById(id); onProcessed()}}
            color="primary"
          >
            Reference
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
