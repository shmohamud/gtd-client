import React, { useState, useEffect } from "react";
import DashboardCard from "../../components/project/DashboardCard";
import styles from "./index.css";
import { useApp } from "../../AppProvider";

const ProjectsPage = () => {
  const { useAuth, useModal, useProject } = useApp();
  const { token } = useAuth;
  const { showModal } = useModal;
  const { projects, setProject, getAll, create } = useProject;

  useEffect(() => {
    getAll(token);
  }, []);

  return (
    <div className="projects-view-main">
      <button
        style={{ color: "white", backgroundColor: "black" }}
        onClick={() =>
          showModal("CREATE_PROJECT_MODAL", {
            title: "",
            description: "",
            deadline: new Date()
          })
        }
      >
        Create Project
      </button>
      <ul className="projects-view-list">
        {projects.length ? (
          projects.map((proj) => (
            <DashboardCard key={proj._id} project={proj} select={setProject} />
          ))
        ) : (
          <h1>There are no Projects to Display</h1>
        )}
      </ul>
    </div>
  );
};

export default ProjectsPage;
