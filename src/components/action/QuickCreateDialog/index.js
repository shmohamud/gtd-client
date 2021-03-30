import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/AddOutlined";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DateAndTimePickers from "../../common/DateAndTimePickers";
import Autocomplete from "@material-ui/lab/Autocomplete";
import swal from "@sweetalert/with-react";
import { useApp } from "../../../AppProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
      color: "white",
      "&:hover": {
        background: "rgb(2,0,36)",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(70,70,71,1) 0%, rgba(3,3,3,1) 43%)",
        color: "whitesmoke",
      },
    },
  },
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
}));

const QuickCreateDialog = ({ data, hasDeadline, delegate }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { useAuth, useForm, useAction } = useApp();
  const { token } = useAuth;
  const { create } = useAction;
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
  const onSubmit = async (validity, values) => {
    if (hasDeadline === undefined) {
      await create(token, {}, values);
      swal(
        <div>
          <h1>Action Created!</h1>
        </div>
      );
      setOpen(false);
    } else {
      alert(
        'Please select a deadline or go back and select "No" for "has concrete deadline" question'
      );
    }
  };

  const { handleChange, handleSubmit, setValues } = useForm(
    onSubmit,
    validationSchema
  );

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AddIcon onClick={() => setOpen(true)} />
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
              Choose an action type and description.
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
              <Autocomplete
                style={{ width: 300 }}
                defaultValue={{type:"none", label: "None"}}
                options={[
                  { type: "call", label: "Call" },
                  { type: "meeting", label: "Meeting" },
                  { type: "none", label: "None" },
                ]}
                classes={{
                  option: classes.option,
                }}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(option) => (
                  <React.Fragment>
                    {option.label}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Action Type"
                    variant="outlined"
                    inputProps={{
                      ...params.inputProps,
                    }}
                  />
                )}
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
};

export default QuickCreateDialog;
