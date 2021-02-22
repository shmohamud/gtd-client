import React from "react";
import DecisionDialog from "../../common/DecisionDialog";
import { useApp } from "../../../AppProvider";

const Item = ({ data }) => {
  const { useInbasket } = useApp();
  const { setInbasket, deleteById } = useInbasket;

  const select = () => {
    setInbasket(data);
  };

  return (
    <li key={data._id} onClick={() => select(data)}>
      <DecisionDialog key={data._id} data={data} deleteById={deleteById}/>
    </li>
  );
};

export default Item;
