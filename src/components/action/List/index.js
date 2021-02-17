import React, { useState, useEffect } from "react";
import DetailsCard from "../DetailsCard";
import styles from "./index.css";
import { Checkbox } from "@material-ui/core";

const List = ({actions, handleCheck, isChecked}) => {

//TODO: Move state from view here...No point prop drillin.
  return (
    actions.length? (
      <ul>
        {actions.map((d) => {
          delete d.date
          let checked = isChecked(d)
           return  <li className="checkbox-card-container" key={d._id} >
                <Checkbox check={checked} onChange={() => handleCheck(d)} />
                <DetailsCard check={checked} data={d} />
            </li>
          
        })}
      </ul>
    ):
    <h2 className="no-actions-header">No Actions to Display</h2>
  );
};



export default List;
