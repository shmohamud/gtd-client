import React from "react";
import baseUrl from "./api/baseUrl";
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
      setProjects(data);
      console.log("Projet hooks: ", data);
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
      await api.updateById(token, body, project._id);
      setProject((project) => Object.assign(project, body));
      getAll(token);
    } catch (err) {
      setErr(err);
    }
  };

  const deleteById = async (token) => {
    try {
      await api.deleteById(token, project._id);
      setProjects((projects) => [
        ...projects.filter((p) => p._id !== project._id),
      ]);
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
