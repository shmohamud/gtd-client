import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import {useApp} from '../../../AppProvider';


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
    display:"flex",
    flexDirection:"column"
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
  button: {

  }
}));

const DoNowModal = ({ initialTime, data, deleteById, getPreviousStep }) => {
  const [open, setOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const {useAuth} = useApp()
  const{token} = useAuth
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
    getPreviousStep()
    setOpen(false)
  };
  const formatTime = () => {
    const date = new Date(0);
    date.setSeconds(timeLeft);
    const timeString = date.toISOString().substr(14, 5);
    return timeString;
  };

  const onDone = () => {
    deleteById(token, data._id)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Do it now!</h2>
      <p id="simple-modal-description">Time Left: {formatTime(timeLeft)} </p>
      <Button style={{alignContent:"center"}} color="primary" variant="contained" onClick={onDone}>Done!</Button>
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
