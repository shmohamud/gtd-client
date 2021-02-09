import React, { useEffect } from "react";
import styles from "./index.css";
import DecisionDialog from "../DecisionDialog";
import { useApp } from "../../../AppProvider";

const List = () => {
  const { useAuth, useBraindump } = useApp();
  const { token } = useAuth;
  const { getAll, braindumps } = useBraindump;
  
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
              <DecisionDialog braindump={braindump} disabled={disabled} />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default List;
