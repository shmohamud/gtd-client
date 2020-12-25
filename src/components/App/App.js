import { Switch, Route } from "react-router-dom";
import AppDrawer from "../common/AppDrawer";
import ProjectsView from "../../views/ProjectsView";
import React, { useEffect, useState, Fragment } from "react";
import ArchiveView from "../../views/ArchiveView";
import Grid from "@material-ui/core/Grid";
import NowView from "../../views/NowView";
import WeekView from "../../views/WeekView";
import ProcessView from "../../views/ProcessView";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [project, selectProject] = useState("");

  const fetchProjects = async function () {
    return fetch("http://localhost:4000/projects", {
      method: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    try {
      fetchProjects().then((response) =>
        response.json().then((project) => setProjects(project))
      );
    } catch (err) {
      console.log("Error: ", err);
    }
  }, []);
  return (
    <Grid container wrap="nowrap" direction="row">
      <Grid item>
        <AppDrawer projects={projects} select={selectProject} />
      </Grid>
      <Switch>
        <Route path="/week" component={WeekView}></Route>
        <Route path="/projects" component={ProjectsView}></Route>
        <Route path="/archive">
          <Grid item>
            <ArchiveView />
          </Grid>
        </Route>
        <Route
          path="/now"
          render={(props) => {
            return (
              <Grid item>
                <NowView {...props} />
              </Grid>
            );
          }}
        ></Route>
        <Route
          path="/process"
          render={(props) => {
            return (
              <Grid item>
                <ProcessView {...props} />
              </Grid>
            );
          }}
        ></Route>
        <Route path="/" component={NowView}></Route>
      </Switch>
    </Grid>
  );
};

export default App;
