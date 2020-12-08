import React, { useEffect } from "react";
import styles from "./index.css";
import Viewer from "../Viewer";
import Instructions from "../Instructions";
import Grid from "@material-ui/core/Grid"

//TODO: Make generic, add gridSize prop

const Content = ({ selected }) => {
  return (
    <Grid item xs={9}>
    <div className={"content"} >
  {!selected ? <Instructions />:<Viewer selectedId={selected} />}
    </div>
    </Grid> 
  );
};

export default Content;
