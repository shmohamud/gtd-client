import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const DoNowModal = ({ initial }) => {
//Only rendered in DecisionDialog (parent) if the given braindump item takes < 2m to complete. If it's rendered, it should start open.
  const [open, setOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(initial);
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  });
  const classes = useStyles();
  // MUI's getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  const handleClose = () => {
    setOpen(false);
  };
  const formatTime = () => {
    const date = new Date(0);
    date.setSeconds(timeLeft);
    const timeString = date.toISOString().substr(14, 5);
    return timeString;
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Do it now!</h2>
      <p id="simple-modal-description">Time Left: {formatTime(timeLeft)} </p>
    </div>
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

export default DoNowModal;
