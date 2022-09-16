import React, { useState } from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DateAndTimePickers from "../../common/DateTimePicker";
import swal from "@sweetalert/with-react";
import { useApp } from "../../../AppProvider";                               

const QuickCreateDialog = () => {
  const [open, setOpen] = useState(false);
  const { useAuth, useForm, useAction } = useApp();
  const { token } = useAuth;
  const { create } = useAction;

  const onSubmit = async (validity, values) => {
    await create(token, {}, values);
    swal(
      <div>
        <h1>Action Created!</h1>
      </div>
    );
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
  return (
null
  );
};


export default QuickCreateDialog;

    // <>
    //   <span
    //     onClick={() => setOpen(true)}
    //     style={{
    //       fontSize: "36px",
    //       color: "white",
    //       position: "relative",
    //       left: "300px",
    //     }}
    //   >
    //     +
    //   </span>
    //   <Dialog
    //     open={open}
    //     onChange={handleChange}
    //     onClose={handleClose}
    //     aria-labelledby="form-dialog-title"
    //   >
    //     <form onSubmit={handleSubmit}>
    //       <p id="form-dialog-title"></p>
    //       <DialogContent>
    //         <DialogContentText>
    //           Please specify the action type and description.
    //         </DialogContentText>

    //         <TextField
    //           autoFocus={true}
    //           name="type"
    //           margin="dense"
    //           id="type"
    //           label="Action Type"
    //           type="text"
    //         />

    //         <TextField
    //           autoFocus={true}
    //           name="description"
    //           margin="dense"
    //           id="description"
    //           label="Action Description"
    //           type="text"
    //           fullWidth={true}
    //         />
    //           <TextField
    //           autoFocus={true}
    //           name="project_id"
    //           margin="dense"
    //           id="project_id"
    //           label="Project"
    //           type="text"
    //           fullWidth={true}
    //         />
    //       </DialogContent>
    //       <DialogActions>
    //         <Button onClick={handleClose} color="primary">
    //           CLOSE
    //         </Button>
    //         <Button type="submit" color="secondary">
    //           ADD
    //         </Button>
    //       </DialogActions>
    //     </form>
    //   </Dialog>
    // </>