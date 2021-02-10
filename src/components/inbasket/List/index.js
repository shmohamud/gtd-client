import React, { useEffect } from "react";
import styles from "./index.css";
import DecisionDialog from '../../common/DecisionDialog';
import { useApp } from "../../../AppProvider";

const List = () => {
  const { useAuth, useInbasket } = useApp();
  const {token} = useAuth
  const { getAll, inbaskets, deleteById } = useInbasket;
  useEffect(() => {
    getAll(token);
  }, []);
  return (
    <div className="inbasket-container">
      <ol key={inbaskets.length}>
        {inbaskets.map((inbasket) => (
          <li key={inbasket._id}><DecisionDialog data={inbasket} deleteById={deleteById}/></li>
        ))}
      </ol>
    </div>
  );
};

export default List;
