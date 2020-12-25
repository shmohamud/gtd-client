import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useApp } from "../../../AppProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const TextInput = ({ keyPress }) => {
  const { useForm } = useApp();
  const { handleChange, handleSubmit, values } = useForm();
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      autoComplete="off"
      onKeyDown={keyPress}
      onChange={handleChange}
    >
      <TextField
        id="braindump-item"
        name="braindump-item"
        label="Add Dump Item"
      />
    </form>
  );
};
export default TextInput;
