import React, { useEffect } from "react";
import Item from '../Item';
import { useApp } from "../../../AppProvider";
import "./index.css";


const List = () => {
  const { useAuth, useInbasket } = useApp();
  const {token} = useAuth
  const { inbaskets, getAll } = useInbasket;
  useEffect(() => {
    getAll(token);
  }, []);

  return (
    <div className="inbasket-list-container">
      <ol key={inbaskets.length}>
        {inbaskets.map((inbasket) => (
        <Item key={inbasket._id} data={inbasket} />
        ))}
      </ol>
    </div>
  );
};

export default List;
