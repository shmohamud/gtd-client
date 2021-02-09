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

export default function CreateDialog({
  onProcessed,
  data,
  hasDeadline,
  delegate,

}) {
  const [open, setOpen] = useState(true);
  const { useAuth,useBraindump,  useForm, useAction } = useApp();
  const {token} = useAuth
  const { deleteById } = useBraindump;
  const { create } = useAction;


  const onSubmit = async (validity, values) => {
    console.log("DATA IN CREATE DIALOG: ", data)
    if (hasDeadline === undefined) {
      console.log("CREATE IN ACTION: ", token, values)

      await create(token, {}, values);
      await deleteById(token, data._id);
      setOpen(false);
      return onProcessed();
    } else if (
      
      hasDeadline &&
      values["deadline"] !== "undefined" &&
      validity["deadline"]
    ) {
       
      console.log("CREATE IN ACTION: ", token, values)
      await create(token, {}, values);
      await deleteById(token, data._id);
      setOpen(false);
      return onProcessed();
    } else {
      console.log("CREATE IN ACTION: ", token, values)

      alert(
        'Please select a deadline or go back and select "No" for "has concrete deadline" question'
      );
    }
  };

  const validationSchema = {
    deadline: (date) => {
      const today = new Date();
      const deadline = new Date(date);
      if (deadline > today) {
        return true;
      } else {
        return false;
      }
    },
  };

  const { handleChange, handleSubmit, setValues } = useForm(
    onSubmit,
    validationSchema
  );

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (delegate) {
      setValues((values) => {
        return { ...values, type: "delegate" };
      });
    }
  }, []);

  const setDeadline = (e) => {
    setDeadline(e.target.value);
    setValues((values) => {
      return { ...values, type: "delegate" };
    });
  };

  return (
    <div>
      <Dialog
        open={open}
        onChange={handleChange}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">
            {data && data.description}
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please specify the action type and description.
            </DialogContentText>

            {delegate ? (
              <TextField
                autoFocus={true}
                name="type"
                margin="dense"
                id="type"
                label="Action Type"
                type="text"
                defaultValue="delegate"
                InputProps={{
                  readOnly: true,
                }}
              />
            ) : (
              <TextField
                autoFocus={true}
                name="type"
                margin="dense"
                id="type"
                label="Action Type"
                type="text"
              />
            )}
            <TextField
              autoFocus={true}
              name="description"
              margin="dense"
              id="description"
              label="Action Description"
              type="text"
              fullWidth={true}
            />
            {hasDeadline && <DateAndTimePickers handleChange={handleChange} />}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              CLOSE
            </Button>
            <Button type="submit" color="secondary">
              ADD
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
