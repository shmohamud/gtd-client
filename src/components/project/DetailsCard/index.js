import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import Modal from "../../common/Modal";
import { useApp } from "../../../AppProvider";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    float: "left",
    margin: "10px 10px 10px 10px",
    paddingTop:"20px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 16,
  },
  deadline: {
    marginBottom: 12,
    color: "gray",
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
});

const DetailsCard = ({ data, select }) => {
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const { useAuth, useProject, useModal } = useApp();
  const {token} = useAuth
  const { showModal, hideModal } = useModal
  const { setProject, deleteById } = useProject;


  const handleOpen = () => {
    showModal("PROJECT_DETAILS_MODAL", {data, select})
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenEditor = () => {
    select (data);
    setEdit(true);
  };

  const handleCloseEditor = () => {
    setEdit(false)
  }

  const classes = useStyles();

  
  if (!data) return null;
  return (
      <Card className={classes.root} onClick={handleOpen}>
        <CardContent
          className={classes.content}
          onClick={() => setProject(data)}
        >
          <Typography className={classes.title} variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography className={classes.deadline}>
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

    );
};

export default DetailsCard;
