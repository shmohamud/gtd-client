import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { useApp } from "../../../AppProvider";

const DashboardCard = ({ project }) => {
  const { useModal } = useApp();
  const { showModal } = useModal;

  const useStyles = makeStyles({
    root: {
      minWidth: 275,
      float: "left",
      margin: "10px 10px 10px 10px",
      paddingTop: "20px",
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

  const handleOpen = () => {
    showModal("READ_PROJECT_MODAL", {data:project});
  };

  const classes = useStyles();

  if (!project) return null;
  return (
    <Card className={classes.root} onClick={handleOpen}>
      <CardContent
        className={classes.content}
      >
        <Typography className={classes.title} variant="h5" component="h2">
          {project.title}
        </Typography>
        <Typography className={classes.deadline}>
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
  );
};

export default DashboardCard;
