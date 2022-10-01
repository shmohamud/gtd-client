import React from "react";
import { projects as api } from "./api";
import { useState } from "react";

export default function useProject() {
  const [project, setProject] = useState([]);
  const [projects, setProjects] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all projects
  const getAll = async (token) => {
    try {
      const response = await api.get(token);
      const data = await response.json();
      //ascending sort based on deadline
      data.sort((a, b) => {
        if (!a?.deadline || !b?.deadline) {
          if (!a.deadline && b.deadline) {
            return 1;
          } else {
            return -1;
          }
        }
        return new Date(a?.deadline) - new Date(b?.deadline);
      });
      setProjects(data);
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (token, validity, body) => {
    console.log("body in create project", body);
    try {
      const response = await api.create(token, body);
      const data = await response.json();
      setProjects((projects) => [...projects, data]);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (token, validity, body) => {
    try {
      await api.updateById(token, body, body._id);
      setProject((project) => Object.assign(project, body));
      getAll(token);
    } catch (err) {
      setErr(err);
    }
  };

  const deleteById = async (token, id) => {
    try {
      await api.deleteById(token, id);
      setProjects((projects) => [...projects.filter((p) => p._id !== id)]);
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  return {
    project,
    projects,
    err,
    setProject,
    getAll,
    create,
    updateById,
    deleteById,
  };
}
