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

  const getById = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/projects/${id}`);
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
      setProjects((projects)=>[...projects, data])
      console.log("Created project: ", data);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (id, values) => {
    fetch(`${baseUrl}/projects/${id}`, {
      method: "PATCH",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  const deleteById = async (id) => {
    setProjects((projects)=> [...projects.filter(p => p._id !== id)])
    await fetch(`${baseUrl}/projects/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

  };

  return {
    projects,
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    err,
  };
}
