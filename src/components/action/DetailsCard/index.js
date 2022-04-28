import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import { useApp } from "../../../AppProvider";
import EditDialog from "../EditDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    "&:hover": {
      background: "rgb(2,0,36)",
      background:
        "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(70,70,71,1) 0%, rgba(3,3,3,1) 43%)",
      color: "whitesmoke",
    },
  },
  backDrop: {
    backgroundColor: "whitesmoke",
    height: "80%",
    width: "80%",
  },
  svg: {
    width: 100,
    height: 100,
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1,
  },
}));

const DetailsCard = ({ check, data }) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const { useAuth, useAction } = useApp();
  const { token } = useAuth;
  const { deleteById, setAction } = useAction;

  const onDelete = () => {
    deleteById(token, data._id);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenEditor = () => {
    setEdit(true);
  };

  const classes = useStyles();

  const details =
    Object.keys(data).length &&
    Object.keys(data).map((k) => {
      console.log(check);
      let textColor = k === "deadline" ? "red" : "";
      return (
        <p style={{ color: textColor }}>
          {k.toUpperCase()} : {data[k]}
        </p>
      );
    });

  const body = (
    <div
      className={classes.backDrop}
      style={{ textAlign: "center", fontFamily: "math", overflow: "visible" }}
    >
      <h2> Action Details </h2>
      {details}
      <div>
        <Button variant="outlined" color="primary" onClick={handleOpenEditor}>
          Edit Action
        </Button>
        <EditDialog open={edit} setOpen={setEdit} />
        <Button variant="outlined" color="primary" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <Card className={classes.root} onClick={handleOpen}>
        <CardContent
          className={classes.content}
          onClick={() => setAction(data)}
        >
          <Typography className={classes.pos} color="secondary">
            {data.deadline !== undefined
              ? new Date(data.deadline).toLocaleDateString()
              : ""}
          </Typography>
          <Typography variant="body2" component="p">
            {data.description}

            <br />
          </Typography>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {body}
      </Modal>
    </>
  );
};

export default DetailsCard;
