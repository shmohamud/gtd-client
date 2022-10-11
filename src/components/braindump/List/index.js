import React, { useEffect } from "react";
import { useApp } from "../../../AppProvider";
import Item from "../Item";
import "./index.css";

const List = () => {
  const { useAuth, useBraindump } = useApp();
  const { token } = useAuth;
  const { braindumps, getAll } = useBraindump;

  useEffect(() => {
    getAll(token);
  }, []);

  return (
    <div className="braindump-list-container">
        {braindumps.map((braindump, i) => (
          <Item key={braindump._id} data={braindump} disabled={i!==0} />
        ))}
    </div>
  );
};

export default List;
