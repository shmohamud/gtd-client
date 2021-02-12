import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import swal from "@sweetalert/with-react";
import { useApp } from "../../../AppProvider";

const validationSchema = {
  firstname: (val) => {
    if (val.length > 30) {
      return false;
    } else {
      return true;
    }
  },
  lastname: (val) => {
    if (val.length > 30) {
      return false;
    } else {
      return true;
    }
  },
  email: (val) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(val).toLowerCase());
  },
  username: (val) => {
    if (val.length > 0 && val.length < 5) {
      return false;
    } else {
      return true;
    }
  },
  password: (val) => {
    if (val.length > 0 && val.length < 7) {
      return false;
    } else {
      return true;
    }
  },
};

const CreateDialog = ({ open, setOpen }) => {
  const { useAuth, useForm } = useApp();
  const { signup } = useAuth;
  const [disabled, setDisabled] = useState(true);
  const { handleChange, handleSubmit, values, errs } = useForm(
    signup,
    validationSchema
  );

  useEffect(() => {
    if (Object.keys(values).length && !Object.keys(errs).length) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [errs]);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <form
          onSubmit={(e) => {
            handleSubmit(e, values);
            handleClose();
            swal(
              <div>
                <h1>Sign up success!</h1>
                <p>
                  Welcome to Metacognizer, {values["firstname"]}! Login to get
                  started.
                </p>
              </div>
            );
          }}
        >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>It's fast and fruitful.</DialogContentText>
            <TextField
              required
              onChange={handleChange}
              error={values.length && errs["firstname"]}
              autoFocus={true}
              name="firstname"
              margin="dense"
              id="firstname"
              label="First name"
              type="text"
              fullWidth={true}
              variant="filled"
            />
            <TextField
              required
              onChange={handleChange}
              error={errs && errs["lastname"]}
              autoFocus={true}
              name="lastname"
              margin="dense"
              id="lastname"
              label="Last name"
              type="text"
              fullWidth={true}
              variant="filled"
            />
            <TextField
              required
              onChange={handleChange}
              error={errs && errs["email"]}
              autoFocus={true}
              name="email"
              margin="dense"
              id="email"
              label="Email address"
              type="text"
              fullWidth={true}
              variant="filled"
            />
            <TextField
              required
              onChange={handleChange}
              error={errs && errs["username"]}
              helperText="username must be at least 5 characters"
              autoFocus={true}
              name="username"
              margin="dense"
              id="username"
              label="User name"
              type="text"
              fullWidth={true}
              variant="filled"
            />
            <TextField
              required
              onChange={handleChange}
              error={errs && errs["password"]}
              helperText="password must be at least 7 characters"
              autoFocus={true}
              name="password"
              margin="dense"
              id="password"
              label="New password"
              type="password"
              fullWidth={true}
              variant="filled"
            />
          </DialogContent>
          <DialogActions>
            <Button
              type="submit"
              color="primary"
              variant="contained"
              disabled={disabled}
            >
              Sign Up
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default CreateDialog;
