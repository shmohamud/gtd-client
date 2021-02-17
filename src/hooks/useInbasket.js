import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useInbasket() {
  const [inbasket, setInbasket] = useState([]);
  const [inbaskets, setInbaskets] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all inbaskets
  const getAll = async (token) => {
    try {
      const response = await fetch(`${baseUrl}/inbaskets`, {
        method: "GET",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
      });
      const data = await response.json();
      setInbaskets(data);
    } catch (err) {
      setErr(err);
    }
  };

  const getById = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/inbaskets/${id}`);
      const data = await response.json();
      setInbasket(data);
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (token, valdity, values) => {
    let body = { description: values };
    try {
      const response = await fetch(`${baseUrl}/inbaskets`, {
        method: "POST",
        headers: new Headers({
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(body),
      });
      const data = await response.json();
      setInbaskets((inbaskets) => [...inbaskets, data]);
      console.log("Created inbasket: ", data);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (id, values) => {
    try {
      fetch(`${baseUrl}/inbaskets/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  const deleteById = async (token, id) => {
    try {
      await fetch(`${baseUrl}/inbaskets/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setInbaskets((inbaskets) => [...inbaskets.filter((i) => i._id !== id)]);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return {
    inbaskets,
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    err,
  };
}
