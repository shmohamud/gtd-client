import React, { useEffect } from "react";
import styles from "./index.css";
import { useApp } from "../../../AppProvider";

const List = () => {
  const { useBraindump } = useApp();
  const { getAll, braindumps } = useBraindump;
  useEffect(() => {
    getAll();
  }, []);
  debugger;

  return (
    <div className="braindump-container">
      <ol key={braindumps.length}>
        {braindumps.map((_i) => (
          <li>{_i.item}</li>
        ))}
      </ol>
    </div>
  );
};

export default List;
