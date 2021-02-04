
import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useIncubate() {
  const [incubate, setIncubate] = useState([]);
  const [incubates, setIncubates] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all incubates
  const getAll = async () => {
    try {
      const response = await fetch(`${baseUrl}/incubates`);
      const data = await response.json();
      setIncubates(data);
    } catch (err) {
      setErr(err);
    }
  };

  const getById = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/incubates/${id}`);
      const data = await response.json();
      setIncubate(data);
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (values, urls) => {
    debugger
      values.urls = urls
    try {
      const response = await fetch(`${baseUrl}/incubates`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setIncubates((incubates)=>[...incubates, data])
      console.log("Created incubate: ", data);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (id, values) => {
    fetch(`${baseUrl}/incubates/${id}`, {
      method: "PATCH",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  const deleteById = async (id) => {
    setIncubates((incubates)=> [...incubates.filter(p => p._id !== id)])
    await fetch(`${baseUrl}/incubates/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

  };

  return {
    incubates,
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    err,
  };
}
