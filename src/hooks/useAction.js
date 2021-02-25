import React from "react";
import { actions as api } from "./api";
import { filterComplete, filterWeekly } from "../utils/filters";
import { useState } from "react";

export default function useAction() {
  const [actions, setActions] = useState([]);
  const [action, setAction] = useState({});
  const [weeklyActions, setWeeklyActions] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all actions
  const getAll = async (token) => {
    try {
      const response = await api.get(token);
      const data = await response.json();
      let actions = filterComplete(data);
      let newWeekly = await filterWeekly(actions);
      setWeeklyActions((d) => newWeekly);
      return setActions(() => actions);
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (token, validity, body) => {
    try {
      const response = await api.create(token, body);
      const data = await response.json();
      setActions((actions) => [...actions, data]);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (token, validity, body) => {
    try {
      await api.updateById(token, body, action._id);
      if (body["complete"]) {
        setTimeout(async () => {
          setActions((actions) => [
            ...actions.filter((item) => item._id !== action._id),
          ]);
          return setWeeklyActions((actions) => [
            ...actions.filter((item) => item._id !== action._id),
          ]);
        }, 500);
      } else {
        return setAction((action) => Object.assign(action, body));
      }
    } catch (err) {
      setErr(err);
    }
  };

  const deleteById = async (token, id) => {
    try {
      await api.deleteById(token, id);
      setTimeout(async () => {
        setActions((actions) => [
          ...actions.filter((item) => item._id !== id),
        ])
      }, 500);
    } catch (err) {
      console.log("Error: ", err )
      setErr(err);
    }
  };

  return {
    actions,
    action,
    weeklyActions,
    err,
    setActions,
    setAction,
    getAll,
    create,
    updateById,
    deleteById,
  };
}
