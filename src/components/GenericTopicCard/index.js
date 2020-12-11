import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormDialog from "../FormDialog";
import List from "../../components/List";
import useForm from "../../hooks/useForm";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    float: "left",
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
      background: "lightblue",
    },
  },
  backDrop: {
    backgroundColor: "pink",
    height: "80%",
    width: "80%",
  },
});

const GenericTopicCard = ({
  data,
  select,
  onSubmit,
  modelName,
  btnTexts,
  projectTextFields,
  actionTextFields,
}) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);

  const { handleChange, handleSubmit, values } = useForm(onSubmit);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenEditor = () => {
    setEdit(true);
  };

  const handleCloseEditor = () => {
    setEdit(false);
  };

  const classes = useStyles();

  let actions = "";

  const details = Object.keys(data).length
    ? Object.keys(data).map((k) => {
        if (k !== "actions")
          return (
            <p>
              {k.toUpperCase()} : {data[k]}
            </p>
          );
        else {
          actions = data[k];
        }
      })
    : "";

  const body = (
    <div className={classes.backDrop}>
      <h2> {modelName} Details </h2>
      {details}
      <div>
        <Button variant="outlined" color="primary" onClick={handleOpenEditor}>
          Edit {modelName}
        </Button>
        <FormDialog
          open={edit}
          setOpen={setEdit}
          onClose={handleCloseEditor}
          onSubmit={onSubmit}
          btnTexts={btnTexts.create}
          dialogTitleText={`Edit ${modelName} Details`}
          textFields={projectTextFields}
        />
        <List
          data={actions}
          select={select}
          btnTexts={btnTexts.edit}
          textFields={actionTextFields}
          modelName={"Action"}
        />
      </div>
    </div>
  );

  return (
    <>
      <Card className={classes.root} onClick={handleOpen}>
        <CardContent
          className={classes.content}
          onClick={() => select(data._id)}
        >
          <Typography className={classes.title} variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {data.deadline !== undefined
              ? new Date(data.deadline).toDateString()
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

export default GenericTopicCard;
