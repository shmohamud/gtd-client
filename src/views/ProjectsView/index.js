import React, { useState, useEffect } from "react";
import DashboardCard from "../../components/project/DashboardCard";
import Grid from "@material-ui/core/Grid";
import CreateDialog from "../../components/project/CreateDialog";
import styles from "./index.css";
import { useApp } from "../../AppProvider";

const ProjectsView = () => {
  const { useProject, useAction } = useApp();
  const { projects, create, updateById } = useProject;
  const { deleteById } = useAction;

  const [project, selectProject] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    useProject.getAll();
  }, []);

  //On check of checkbox, update Projects
  const onCheckComplete = async (action) => {
    let proj = projects.find((p) => p._id === project);
    //Mozilla docs: The optional chaining operator (?.) permits reading the value of a property located deep within a chain of
    //connected objects without having to expressly validate that each reference in the chain is valid.
    if (proj?.actions !== undefined) {
      deleteById(action._id);
    }
  };

  return (
    <div className="projects-view-main">
      <Grid item>
        <button
          color="primary"
          className="button"
          onClick={() => setOpen(true)}
        >
          Create New!
        </button>
        <CreateDialog
          open={open}
          setOpen={setOpen}
          onSubmit={async (validity, values) => create(validity, values)}
        />
        <div>
          {projects.length &&
            projects.map((proj) => (
              <DashboardCard
                key={proj._id}
                onCheckComplete={onCheckComplete}
                project={proj}
                select={selectProject}
                onSubmit={updateById}
              />
            ))}
        </div>
      </Grid>
    </div>
  );
};

export default ProjectsView;
