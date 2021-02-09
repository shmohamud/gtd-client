import React, { useState, useEffect } from "react";
import List from "../../components/action/List";
import { useApp } from "../../AppProvider";
import Footer from "../../components/common/Footer";
import Timer from "../../components/common/Timer";
import styles from "./index.css";

const NowView = ({ quotationIndex }) => {
  const { useAuth, useAction } = useApp();
  const { token } = useAuth;
  const { getAll, actions, updateById } = useAction;
  const [checkedActions, setCheckedActions] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      getAll(token);
    }
  }, []);
  const handleCheck = async (d) => {
    let values = { ...d, complete: true };
    await updateById({}, values);
    setCheckedActions((checkedActions) => [...checkedActions, d]);
  };

  const isChecked = (action) => {
    if (checkedActions.length >= 1) {
      return checkedActions.some((a) => a._id === action._id);
    }
    return false;
  };

  return (
    <div className="now-view-container">
      <Timer initial={1200} />
      <div className="actions-list-container">
        {actions.length ? (
          <List
            actions={actions}
            handleCheck={handleCheck}
            isChecked={isChecked}
          />
        ) : (
          <h1>There are no Actions to display</h1>
        )}
      </div>
      <Footer index={quotationIndex} />
    </div>
  );
};

export default NowView;
