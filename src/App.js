import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import NextActionsList from "./views/MyActionsView";
import PlanView from './views/PlanView'
import React, { useEffect, useState, Fragment } from "react";
import CaptureView from './views/CaptureView';
import Grid from "@material-ui/core/Grid";
import ExecuteView from "./views/ExecuteView";

//TODO: Centralize routes in a separate file and map them here. Replace all this calling code with custom hooks.

const App = () => {
  // const [projects, setProjects] = useState([]);
  // const [project, selectProject] = useState("");

  // const fetchProjects = async function () {
  //   return fetch("http://localhost:4000/projects", {
  //     method: "GET",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };
  // useEffect(() => {
  //   try {
  //     fetchProjects().then((response) =>
  //       response.json().then((projects) => setProjects(projects))
  //     );
  //   } catch (err) {
  //     console.log("ERROR: ", err);
  //   }
  // }, []);
  return (
    <Fragment>
      <NavBar />
      <Grid container direction="row" >
        <Switch>
          <Route
            path="/plan"
            component={PlanView}
          ></Route>
          <Route path="/capture">
            <Grid item> 
            <CaptureView  /></Grid>
          </Route>
          <Route
            path="/execute"
            render={(props) => {
              return (
                <Grid item>
                  <ExecuteView {...props} />
                </Grid>
              );
            }}
          ></Route>
          <Route path="/" component={ExecuteView}></Route>
        </Switch>
      </Grid>
    </Fragment>
  );
};

export default App;
