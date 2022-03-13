import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > svg": {
      margin: theme.spacing(2),
      color: "white",
    },
  },
}));

const QuickCreateDialog = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
    </div>
  );
};

export default QuickCreateDialog;
