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
import swal from "@sweetalert/with-react";
import { useApp } from "../../../AppProvider";

export default function CreateDialog({
  open,
  handleCloseOrCancel,
  id,
  deleteById,
}) {
  const [urls, setUrls] = useState([]);
  const { useAuth, useForm, useReference } = useApp();
  const { token } = useAuth;
  const { create } = useReference;
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
            onClick={async () => {
              let body = values;
              body.urls = urls;
              await create(token, {}, body);
              swal(
                <div>
                  <h1>Reference Created!</h1>
                </div>
              );
              await deleteById(token, id);
            }}
            color="primary"
          >
            Reference
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
