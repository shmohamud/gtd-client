import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import List from "../../action/List";
import { useApp } from "../../../AppProvider";
import EditDialog from "../EditDialog";
import CreateDialog from "../../action/CreateDialog";

const useStyles = makeStyles({
  root: {
    float: "left",
    margin: "5px",
    width: "250px",
    height: "250px",
    "&:hover": {
      background: "bisque",
    },
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
  backDrop: {
    backgroundColor: "whitesmoke",
    height: "80%",
    width: "80%",
  },
});

const ProjectDashboardCard = ({
  project,
  select,
  onSubmit,
  onCheckComplete,
}) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [create, setCreate] = useState(false);
  const { useForm, useAction, useProject } = useApp();
  const { deleteById } = useProject;
  const { createAssigned } = useAction;

  useForm(createAssigned);
  const classes = useStyles();
  //On click of a dashboard card open details modal
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

  const handleOpenCreate = () => {
    setCreate(true);
  };

  const handleCloseCreate = () => {
    setCreate(false);
  };

  let actions = "";

  const details = Object.keys(project).length
    ? Object.keys(project).map((k) => {
        if (k !== "actions")
          return (
            <p>
              {k.toUpperCase()} : {project[k]}
            </p>
          );
        else {
          actions = project[k];
        }
      })
    : "";

  const id = project._id;

  const body = (
    <div className={classes.backDrop}>
      <h2> Project Details </h2>
      {details}
      <div>
        <Button variant="outlined" color="primary" onClick={handleOpenEditor}>
          Edit Project
        </Button>
           <EditDialog
          open={edit}
          project={project}
          setOpen={setEdit}
          onClose={handleCloseEditor}
          onSubmit={onSubmit}
        />
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            deleteById(id);
            return setOpen(false);
          }}
        >
          Delete Project
        </Button>
        <Button variant="outlined" color="primary" onClick={handleOpenCreate}>
          Create Action
        </Button>
        <CreateDialog
          open={create}
          setOpen={setCreate}
          onClose={handleCloseCreate}
          onSubmit={createAssigned}
          dialogTitleText={`Add Action Details`}
          id={id}
        />
        <List
          data={actions}
          select={select}
          onCheckComplete={onCheckComplete}
        />
      </div>
    </div>
  );

  return (
    <>
      <Card className={classes.root} onClick={handleOpen}>
        <CardContent
          className={classes.content}
          onClick={() => select(project._id)}
        >
          <Typography className={classes.title} variant="h5" component="h2">
            {project.title}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {project.deadline !== undefined
              ? new Date(project.deadline).toDateString()
              : ""}
          </Typography>
          <Typography variant="body2" component="p">
            {project.description}
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
          overflow: "scroll",
        }}
      >
        {body}
      </Modal>
    </>
  );
};

export default ProjectDashboardCard;
