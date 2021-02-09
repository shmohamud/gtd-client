import React, { useState, useEffect } from "react";
import DayHeader from "../../components/common/DayHeader";
import { useApp } from "../../AppProvider";
import List from "../../components/action/List";
import styles from "./index.css";

const WeekView = () => {
  const { useAuth, useAction } = useApp();
  const { token } = useAuth;
  const { getAll, updateById, weeklyActions } = useAction;

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

  const startOfWeek = (date) => {
    var diff = date.getDate() - date.getDay();
    return new Date(date.setDate(diff));
  };
  let dt = new Date(Date.now());
  let start = startOfWeek(dt);
  let dates = [];
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days.forEach((d) => {
    let obj = { [d]: start.getUTCDate() - 1 };
    obj["month"] = start.getUTCMonth() + 1;
    dates.push(obj);
    start.setDate(start.getDate() + 1);
    return;
  });

  const filterDaily = (day) => {
    let actionsWithDate = [];
    weeklyActions.forEach((a) => {
      actionsWithDate.push({
        date: new Date(a.deadline).toUTCString().slice(0, 3),
        ...a,
      });
    });
    let filtered = actionsWithDate.filter((d) => {
      return d.date === day;
    });
    return filtered;
  };

  return weeklyActions.length ? (
    <div className="week-view-main">
      <h1>
        Week of <span style={{ color: "red" }}>{dates[0]["month"]}</span>/
        <span style={{ color: "red" }}>{dates[0]["Sun"]}</span> to{" "}
        <span style={{ color: "red" }}>{dates[6]["month"]}</span>/
        <span style={{ color: "red" }}>{dates[6]["Sat"]}</span>{" "}
      </h1>

      <DayHeader day={"Sunday"} />
      <List
        actions={filterDaily("Sun")}
        handleCheck={handleCheck}
        isChecked={isChecked}
      />

      <DayHeader day={"Monday"} />
      <List
        actions={filterDaily("Mon")}
        handleCheck={handleCheck}
        isChecked={isChecked}
      />

      <DayHeader day={"Tuesday"} />
      <List
        actions={filterDaily("Tue")}
        handleCheck={handleCheck}
        isChecked={isChecked}
      />

      <DayHeader day={"Wednesday"} />
      <List
        actions={filterDaily("Wed")}
        handleCheck={handleCheck}
        isChecked={isChecked}
      />

      <DayHeader day={"Thursday"} />
      <List
        actions={filterDaily("Thu")}
        handleCheck={handleCheck}
        isChecked={isChecked}
      />

      <DayHeader day={"Friday"} />
      <List
        actions={filterDaily("Fri")}
        handleCheck={handleCheck}
        isChecked={isChecked}
      />

      <DayHeader day={"Saturday"} />
      <List
        actions={filterDaily("Sat")}
        handleCheck={handleCheck}
        isChecked={isChecked}
      />
    </div>
  ) : (
    <h1>No Scheduled Actions this Week!</h1>
  );
};

export default WeekView;
