import React, { useState, useEffect } from "react";
import DashboardCard from "../../components/project/DashboardCard";
import CreateIcon from '@material-ui/icons/Create';
import CreateDialog from "../../components/common/CRUDDialog";
import dialogFields from "../../components/common/CRUDDialog/fieldsConfig"
import { useApp } from "../../AppProvider";
import styles from "./index.css";

const ProjectsView = () => {
  const { useAuth, useProject, useSnackbar } = useApp();
  const { token } = useAuth;
  const { projects, setProject, create } = useProject;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    useProject.getAll(token);
    console.log(dialogFields)
  }, [dialogFields]);

  const { handleOpen, message, severity } = useSnackbar;

  const snackbarMessages = {
    "POST": {
      success: `Successfully created a project.`,
      error: `Error creating a project. `,
    },
    "PATCH": {
      success: `Successfully updated a project.`,
      error: `Error updating project.`,
    },
  };

const handleRequest = async (token, validity, values) => {
  const body = values;
  return create(token, validity, body);
}

  return (

    <div className="projects-view-main">
        <CreateIcon style={{float:"right"}}fontSize="large" onClick={()=>setOpen(true)}/><span style={{float:"right", fontSize: "20px",fontWeight:"700"}}>(create)</span>
      <CreateDialog open={open} handleRequest={handleRequest} setOpen={setOpen} modelName={"project"} method={"POST"} contentText={"Please enter a project title and description"}/>
      <div>
        {projects.length ? (
          projects.map((proj) => (
            <DashboardCard
              key={proj._id}
              project={proj}
              select={setProject}
              setOpen={setOpen}
            />
          ))
        ) : (
          <h1>There are no Projects to Display</h1>
        )}
      </div>
    </div>
  );
};

export default ProjectsView;
