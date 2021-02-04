import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useProject() {
  const [project, setProject] = useState([]);
  const [projects, setProjects] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all projects
  const getAll = async () => {
    try {
      const response = await fetch(`${baseUrl}/projects`);
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      setErr(err);
    }
  };

  const getById = async () => {
    try {
      const response = await fetch(`${baseUrl}/projects/${project._id}`);
      const data = await response.json();
      setProject(data);
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (validity, values) => {
    try {
      const response = await fetch(`${baseUrl}/projects`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setProjects((projects) => [...projects, data]);
      console.log("Created project: ", data);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (validity, values) => {
    console.log("PROJECT: ", project);
    try {
      fetch(`${baseUrl}/projects/${project._id}`, {
        method: "PATCH",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      setProject((project) => Object.assign(project, values));
    } catch (err) {
      setErr(err);
    }
  };

  const deleteById = async () => {
    setProjects((projects) => [...projects.filter((p) => p._id !== project._id)]);
    await fetch(`${baseUrl}/projects/${project._id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  };

  return {
    project: project,
    projects: projects,
    setProject,
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    err,
  };
}
