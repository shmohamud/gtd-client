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
      <SvgIcon>
        <path d=" M 10 10 V 80 H 20 V 80 H 20" />
      </SvgIcon>
      <SvgIcon>
        <path d=" M 01 10 H 80 V 20 H 80" />
      </SvgIcon>
    </div>
  );
};

export default QuickCreateDialog;
