import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useAction() {
  const [actions, setActions] = useState([]);
  const [action, setAction] = useState({});
  const [weeklyActions, setWeeklyActions] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all actions
  const getAll = async (token, onlyIncomplete = false) => {
    try {
      const response = await fetch(`${baseUrl}/actions`, {
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
      });
      const data = await response.json();
      let actions = filterComplete(data);
      let newWeekly = await filterWeeklyActions(actions);
      setWeeklyActions((d) => newWeekly);
      return setActions(() => actions);
    } catch (err) {
      setErr(err);
    }
  };

  //Filter out any action that doesn't happen this week
  const filterWeeklyActions = async (actions) => {
    let weekly = [];
    var curr = new Date(Date.now());
    var first = curr.getDate() - curr.getDay();
    var firstday = new Date(curr.setDate(first)).getTime();
    var lastday = firstday + 604800000;
    actions.forEach((a) => {
      if (
        new Date(a.deadline).getTime() <= lastday &&
        new Date(a.deadline).getTime() >= firstday
      ) {
        weekly.push(a);
      }
    });
    return weekly;
  };

  const filterComplete = (actions) => {
    return actions.filter((a) => !a.complete);
  };

  const getById = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/actions/${id}`);
      const data = await response.json();
      setAction(data);
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (token, validity, values) => {
    try {
      const response = await fetch(`${baseUrl}/actions`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log("DATA: ", data);
      setActions((actions) => [...actions, data]);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (validity, values) => {
    try {
      fetch(`${baseUrl}/actions/${action._id || values._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (values["complete"]) {
        setTimeout(async () => {
          setActions((actions) => [
            ...actions.filter((item) => item._id !== values._id),
          ]);
          return setWeeklyActions((actions) => [
            ...actions.filter((item) => item._id !== values._id),
          ]);
        }, 500);
      } else {
        return setAction((action) => Object.assign(action, values));
      }
    } catch (err) {
      setErr(err);
    }
  };

  const deleteById = async (token, id) => {
    console.log("Deletee by id : ", id);
    try {
      await fetch(`${baseUrl}/actions/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setActions((actions) => [...actions.filter((a) => a._id !== id)]);
    } catch (err) {
      setErr(err);
    }
  };

  return {
    actions: actions,
    action: action,
    weeklyActions: weeklyActions,
    setActions,
    setAction,
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    err: err,
  };
}
