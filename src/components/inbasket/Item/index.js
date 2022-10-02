import React from "react";
import DecisionDialog from "../../common/DecisionDialog";
import { useApp } from "../../../AppProvider";
import "./index.css"

const Item = ({ data }) => {
  const { useInbasket } = useApp();
  const { setInbasket, deleteById } = useInbasket;

  const select = () => {
    setInbasket(data);
  };

  return (
    <li key={data._id} className="inbasket-li-item" onClick={() => select(data)}>
      <DecisionDialog key={data._id} data={data} deleteById={deleteById}/>
    </li>
  );
};

export default Item;
