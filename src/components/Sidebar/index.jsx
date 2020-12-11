import React from "react";
import List from "../List";
import styles from "./index.css";
import Grid from "@material-ui/core/Grid"

//TODO: Make generic. Selector and Model, so List of Projects and Actions are equally viewable. Props should be: select & data

const Sidebar = ({ select, data}) => {
 return (
   <Grid item xs={3}>
    <div className="project-summary-element sidebar">
      <List select={select} data={data}  />
    </div>
    </Grid>
  );
};




export default Sidebar;
