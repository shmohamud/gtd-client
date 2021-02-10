import React, { useEffect } from "react";
import styles from "./index.css";
import DecisionDialog from "../../common/DecisionDialog";
import { useApp } from "../../../AppProvider";

const List = () => {
  const { useAuth, useBraindump } = useApp();
  const { token } = useAuth;
  const { getAll, braindumps, deleteById } = useBraindump;
  
  useEffect(() => {
    getAll(token);
  }, []);
  return (
    <div className="braindump-container">
      <ol key={braindumps.length}>
        {braindumps.map((braindump, i) => {
          console.log("Braindump item in List: ", braindump);
          let disabled = true;
          if (i === 0) {
            disabled = false;
          }
          return (
            <li key={braindump._id}>
              <DecisionDialog data={braindump} disabled={disabled} deleteById={deleteById} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default List;
