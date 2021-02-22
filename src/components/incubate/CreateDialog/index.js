import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import swal from "@sweetalert/with-react";
import UrlInput from "../UrlInput";
import NoteInput from "../NoteInput";
import { useApp } from "../../../AppProvider";


export default function CreateDialog({ open, handleCloseOrCancel, id, deleteById }) {
  const { useAuth, useForm, useIncubate} = useApp();
  const {token} = useAuth
  const { create } = useIncubate;
  const { handleChange, values } = useForm();
  const [urls, setUrls] = useState([]);

  return (
    <div>
      <Dialog
        open={open}
        onChange={handleChange}
        onClose={handleCloseOrCancel}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Incubate Item</DialogTitle>
        <DialogContent>
          Click Incubate to add to your Someday/Maybe List.
          <UrlInput urls={urls} setUrls={setUrls} handleChange={handleChange} />
          <NoteInput handleChange={handleChange} />
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseOrCancel} color="primary">
            Cancel
          </Button>
          <Button
            onClick={async () => {
              let body = values;
              body.urls = urls;
              await create(token, {}, body);
              swal(
                <div>
                  <h1>Incubate Created!</h1>
                </div>
              );
              await deleteById(token, id);
            }}
            color="secondary"
          >
            Incubate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
