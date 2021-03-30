import React, { useEffect } from "react";
import styles from "./index.css";
import DecisionDialog from "../../common/DecisionDialog";
import { useApp } from "../../../AppProvider";

const List = () => {
  const { useAuth, useAction, useBraindump } = useApp();
  const { token } = useAuth;
  const { braindumps, getAll, deleteById } = useBraindump;
  const { create } = useAction;

  useEffect(() => {
    getAll(token);
  }, []);

  const handleRequest = async (token, validity, values) => {
    if (!values["deadline"]) {
      await create(token, {}, values);
      await deleteById(token);
    } else if (values["deadline"] !== "undefined" && validity["deadline"]) {
      await create(token, {}, values);
      await deleteById(token);
    } else {
      alert(
        'Please select a deadline or go back and select "No" for "has concrete deadline" question'
      );
    }
  };

  return (
    <div>
      <ol key={braindumps.length}>
        {braindumps.map((braindump, i) => {
          let disabled = true;
          if (i === 0) {
            disabled = false;
          }
          return (
            <li key={braindump._id}>
              <DecisionDialog
                data={braindump}
                disabled={disabled}
                deleteById={deleteById}
                handleRequest={handleRequest}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default List;
