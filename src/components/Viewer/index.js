import React, { useEffect, useState } from "react";
import MyActionsView from "../../views/MyActionsView";

//TODO: Remove state and convert to purely reusable presentational component
//TODO: Remove MyActionsList from here (to match with new directory organization rules...Views are composed of Components, not Vice Versa.)
//TODO: Make custom hooks containing all routes of each model.

const Viewer = ({ selectedId }) => {
  const [project, setProject] = useState(null);

  const fetchProject = async function () {
    try {
      const response = await fetch(
        "http://localhost:4000/projects/" + selectedId,
        {
          method: "GET",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      const project = response.json();
      return project;
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  useEffect(() => {
    fetchProject().then((project) => setProject(project));
  }, []);

  return <MyActionsView project={project} />;
};

export default Viewer;
