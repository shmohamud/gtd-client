import React, { useEffect } from "react";
import styles from "./index.css";
import DecisionDialog from '../DecisionDialog';
import { useApp } from "../../../AppProvider";

const List = ({deleteById}) => {
  const { useBraindump } = useApp();
  const { getAll, braindumps } = useBraindump;
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className="braindump-container">
      <ol key={braindumps.length}>
        {braindumps.map((_i, i) => {
        let disabled = true
        if(i === 0){
          disabled = false
        }
          return(

          <li><DecisionDialog braindump={_i} disabled={disabled} deleteById={deleteById}/></li>
        )})}
      </ol>
    </div>
  );
};

export default List;
