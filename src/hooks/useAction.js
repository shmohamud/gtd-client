import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useAction() {
  const [action, setAction] = useState([]);
  const [actions, setActions] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of actions for all projects
  const getAll = async () => {
    try {
      const response = await fetch(`${baseUrl}/actions`);
      const data = await response.json();
      setActions(data);
    } catch (err) {
      setErr(err);
    }
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

  //Create an action that is already assigned to a project
  const createAssigned = async (validity, values) => {
    const id = values.id;
    try {
      const response = await fetch(`${baseUrl}/projects/${id}/actions`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setAction(data);
    } catch (err) {
      setErr(err);
    }
  };

  //Create an action that has not been assigned to a project
  const createUnassigned = async (values) => {
    try {
      const response = await fetch(`${baseUrl}/action`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setAction(data);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = (id, values) => {
    fetch(`${baseUrl}/actions/${id}`, {
      method: "PATCH",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  const deleteById = async (id) => {
    await fetch(`${baseUrl}/actions/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  };

  return {
    actions: actions,
    action: action,
    setActions,
    getAll,
    getById,
    createAssigned,
    createUnassigned,
    updateById,
    deleteById,
  };
}
