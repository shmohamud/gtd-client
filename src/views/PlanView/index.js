import React, { useState, useEffect } from "react";
import GenericTopicCard from "../../components/GenericTopicCard";
import Grid from "@material-ui/core/Grid";
import GenericButton from "../../components/Button";
import FormDialog from "../../components/FormDialog";
import GenericModal from "../../components/GenericModal";

const PlanView = () => {
  const [projects, setProjects] = useState([]);
  const [project, selectProject] = useState("");
  const [open, setOpen] = useState(false);

  const fetchProjects = async function () {
    return fetch("http://localhost:4000/projects", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  };

  const fetchProject = async function () {
    if (project) {
      try {
        fetch("http://localhost:4000/projects/" + project, {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        });
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  useEffect(() => {
    try {
      fetchProjects().then((response) =>
        response.json().then((project) => setProjects(project))
      );
    } catch (err) {
      console.log("ERROR: ", err);
    }
  }, []);

  useEffect(() => {
    if (project) {
      try {
        fetchProject().then((response) =>
          response.json().then((projects) => setProjects(projects))
        );
      } catch (err) {
        console.log("ERROR: ", err);
      }
    }
  }, []);

  const onSubmitCreate = (validity, values) => {
    debugger;
    fetch("http://localhost:4000/projects/create", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    setOpen(false);
  };

  const onSubmitEdits = (validity, values) => {
    debugger;
    fetch(`http://localhost:4000/projects/${project}/edit`, {
      method: "PATCH",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    setOpen(false);
  };

  const btnTexts = {
    create: {
    open: "Create New Project",
    submit: "Create",
    close: "Cancel"},
   edit:  {
    open: "Edit",
    submit: "Save",
    close: "Cancel"},
   }
  ;
  const dialogContentText =
    "Please enter a title, description and deadline for completion.";
  const projectTextFields = [
    {
      autoFocus: true,
      name: "title",
      margin: "dense",
      id: "title",
      label: "Project Title",
      type: "text",
      fullWidth: true,
    },
    {
      autoFocus: true,
      name: "description",
      margin: "dense",
      id: "description",
      label: "Project Description",
      type: "text",
      fullWidth: true,
    },
  ];

  const actionTextFields = [
    {
      autoFocus: true,
      name: "type",
      margin: "dense",
      id: "type",
      label: "Action Type",
      type: "text",
      fullWidth: true,
    },
    {
      autoFocus: true,
      name: "completed",
      margin: "dense",
      id: "completed",
      label: "Action Completion",
      type: "text",
      fullWidth: true,
    },
  ];

  return (
    <Grid item>
      <FormDialog
        open={open}
        setOpen={setOpen}
        onSubmit={onSubmitCreate}
        btnTexts={btnTexts}
        dialogContentText={dialogContentText}
      />
      <div>
        {projects.length &&
          projects.map((proj) => (
            <GenericTopicCard
              key={proj._id}
              data={proj}
              select={selectProject}
              onSubmit={onSubmitEdits}
              modelName={"project"}
              childModelName={"action"}
              btnTexts={btnTexts}
              projectTextFields={projectTextFields}
              actionTextFields={actionTextFields}
            />
          ))}
      </div>
    </Grid>
  );
};

export default PlanView;
