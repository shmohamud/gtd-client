import React, { useState, useEffect } from "react";
import DashboardCard from "../../components/project/DashboardCard";
import CreateDialog from "../../components/project/CreateDialog";
import CreateIcon from '@material-ui/icons/Create';
import styles from "./index.css";
import { useApp } from "../../AppProvider";

const ProjectsView = () => {
  const { useAuth, useProject } = useApp();
  const { token } = useAuth;
  const { projects, setProject, getAll} = useProject;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getAll(token);
  }, []);

  return (
    <div className="projects-view-main">
        <CreateIcon style={{float:"right"}}fontSize="large" onClick={()=>setOpen(true)}/><span style={{float:"right", fontSize: "20px",fontWeight:"700"}}>(create)</span>
      <CreateDialog open={open} setOpen={setOpen} />
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
