import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useApp } from "../../../AppProvider";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "40%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  div: {
    padding: "2rem 2rem 2rem 2rem",
    display: "flex",
    justifyContent: "center",
  },
  loginBtn: {
    backgroundColor: "royalblue",
    "&:hover": {
      backgroundColor: "#7286c2",
    },
    fontFamily: "serif",
  },
  label: {
    fontFamily: "serif",
  },
});

export default function LoginCard() {
  const { useAuth, useForm } = useApp();
  const { login } = useAuth;
  const { handleChange, handleSubmit } = useForm(login);

  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <form id="login" onSubmit={handleSubmit} onChange={handleChange}>
            <TextField
              autoFocus={true}
              name="username"
              margin="dense"
              id="username"
              label="Username"
              type="text"
              fullWidth={true}
              variant="filled"
            />
            <TextField
              autoFocus={true}
              name="password"
              margin="dense"
              id="password"
              label="Password"
              type="password"
              fullWidth={true}
              variant="filled"
            />
            <Button
              className={classes.loginBtn}
              type="submit"
              variant="contained"
              color="primary"
              size="medium"
            >
              Login
            </Button>
          </form>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </div>
  );
}
