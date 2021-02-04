import React, { useState, useEffect } from "react";
import DashboardCard from "../../components/project/DashboardCard";
import CreateDialog from "../../components/project/CreateDialog";
import styles from "./index.css";
import { useApp } from "../../AppProvider";

const ProjectsView = () => {
  const { useProject} = useApp();
  const { projects, setProject} = useProject;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    useProject.getAll();
  }, []);

  return (
    <div className="projects-view-main">
      <button color="primary" className="button" onClick={() => setOpen(true)}>
        Create New!
      </button>
      <CreateDialog
        open={open}
        setOpen={setOpen}
      />
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
