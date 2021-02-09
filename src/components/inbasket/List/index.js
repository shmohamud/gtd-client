import React, { useEffect } from "react";
import styles from "./index.css";
import DecisionDialog from '../DecisionDialog';
import { useApp } from "../../../AppProvider";

const List = ({deleteById}) => {
  const { useInbasket } = useApp();
  const { getAll, inbaskets } = useInbasket;
  useEffect(() => {
    getAll();
  }, []);
  return (
    <div className="inbasket-container">
      <ol key={inbaskets.length}>
        {inbaskets.map((_i) => (
          <li><DecisionDialog inbasket={_i} deleteById={deleteById}/></li>
        ))}
      </ol>
    </div>
  );
};

export default List;
