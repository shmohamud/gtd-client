import React, { useState, useEffect } from "react";
import DashboardCard from "../../components/project/DashboardCard";
import styles from "./index.css";
import { useApp } from "../../AppProvider";


const ProjectsPage = () => {
  const { useAuth, useForm, useModal, useProject } = useApp();
  const { showModal } = useModal;
  const { projects, setProject, getAll, create } = useProject;
  const { token } = useAuth;

  const onSubmit = async (validity, values) => {
    try {
      await create(token, {}, values);
    } catch (err) {

      console.log("Error: ", err)
    }
  };


  useEffect(() => {
    getAll(token);
  }, []);

  return (
    <div className="projects-view-main">
      <button
        style={{ color: "white", backgroundColor: "black" }}
        onClick={() => showModal("CREATE_UPDATE_PROJECT_MODAL", {crudOperation:"create"})}
      >
        Create Project
      </button>
      <ul className="projects-view-list">
        {projects.length ? (
          projects.map((proj) => (
            <DashboardCard
              key={proj._id}
              project={proj}
              select={setProject}
            />
          ))
        ) : (
          <h1>There are no Projects to Display</h1>
        )}
      </ul>
    </div>
  );
};

export default ProjectsPage;
