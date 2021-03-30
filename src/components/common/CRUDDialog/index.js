import React from "react";
import { useApp } from "../../../AppProvider";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import getFields from "../../common/CRUDDialog/fieldsConfig";
import CustomSnackbar from "../Snackbar";

//Model agnostic for POST/PATCH
const CRUDDialog = ({
  modelName,
  method,
  dialogButtons,
  title,
  handleRequest,
  contentText,
  open,
  setOpen,
}) => {
  const { useAuth, useForm, useSnackbar } = useApp();
  const { token } = useAuth;
  const { handleOpen, message, severity } = useSnackbar;
  const { fields } = getFields();

  const snackbarMessages = {
    "POST": {
      success: `Successfully created a ${modelName}.`,
      error: `Error creating a ${modelName}: `,
    },
    "PATCH": {
      success: `Successfully updated a ${modelName}.`,
      error: `Error updating ${modelName}: `,
    },
  };

  const onSubmit = async (validity, values) => {
    try {
      await handleRequest(token, validity, values);
      const msg = snackbarMessages[method]["success"];
      //open snackbar with success message
      handleOpen(msg, "success");
    } catch (err) {
      const msg = snackbarMessages[method]["error"];
      //Open snackbar with error message
      handleOpen(msg, "error");
      console.log("Error: ", err);
    }
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { handleChange, handleSubmit } = useForm(onSubmit);
  return (
    <div>
      <Dialog
        open={open}
        onChange={handleChange}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {contentText}
          </DialogContentText>
          {fields[modelName][method].map((field, i) => {
            let FieldComponent = field.component;
            return <FieldComponent key={i} {...field.fieldProps} />;
          })}
          {handleRequest && <Button onClick={handleSubmit}>Submit</Button>}
        </DialogContent>
        <DialogActions>
          <Button onClick-={handleSubmit}>Cancel</Button>
        </DialogActions>
      </Dialog>
      <CustomSnackbar severity={severity} message={message} />
    </div>
  );
};

export default CRUDDialog;
