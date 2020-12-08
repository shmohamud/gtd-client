import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
      hover:true
  }
})

//TODO: Make generic ModelSummaryCard. Pass 'styles' prop in from parent component, 'model' prop, Typography content. 

const ProjectCard = ({project, select}) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  console.log(typeof project.deadline)

  return (
    <Card className={classes.root} >
      <CardContent onClick={()=>select(project._id)}>
        <Typography className={classes.title} variant="h5" component="h2">
         {project.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {new Date(project.deadline).toDateString()}
        </Typography>
        <Typography variant="body2" component="p">
          {project.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>select(project._id)}>Select</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
