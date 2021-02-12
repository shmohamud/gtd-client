import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CreateDialog from "../../user/CreateDialog";
import Button from "@material-ui/core/Button";

const Signup = () => {
  const useStyles = makeStyles({
    signupBtn: {
      backgroundColor: "dodgerblue",
      "&:hover": {
        background: "#71a2d1",
      },
      paddingTop: "10px",
      marginLeft: "2rem",
      marginTop: "1rem",
      marginBottom: "1rem",
      maxWidth: "20%",
      alignSelf: "center",
      color: "white",
      fontFamily: "serif",
      fontWeight: "bolder",
    },
  });
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  return (
    <>
      <Button className={classes.signupBtn} onClick={() => setOpen(!open)}>
        Create Account
      </Button>
      <CreateDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default Signup;
