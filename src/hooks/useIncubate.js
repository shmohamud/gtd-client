import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useIncubate() {
  const [incubate, setIncubate] = useState([]);
  const [incubates, setIncubates] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all incubates
  const getAll = async (token) => {
    try {
      const response = await fetch(`${baseUrl}/incubates`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
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

  const create = async (token, validity, values, urls) => {
    let body = values;
    body.urls = urls;
    try {
      const response = await fetch(`${baseUrl}/incubates`, {
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(body),
      });
      const data = await response.json();
      setIncubates((incubates) => [...incubates, data]);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (id, values) => {
    const body = values;
    try {
      await fetch(`${baseUrl}/incubates/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      setIncubates((incubates) => {
        incubates.map((_i) =>
          _i._id === id ? Object.assign({}, _i, { values }) : _i
        );
      });
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  const deleteById = async (token, id) => {
    try {
      await fetch(`${baseUrl}/incubates/${id}`, {
        method: "DELETE",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
      });
      setIncubates((incubates) => [
        ...incubates.filter((_i) => _i._id !== _i._id),
      ]);
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
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
