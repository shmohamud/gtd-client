
import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useInbasket() {
  const [inbasket, setInbasket] = useState([]);
  const [inbaskets, setInbaskets] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all inbaskets
  const getAll = async () => {
    try {
      const response = await fetch(`${baseUrl}/inbaskets`);
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

  const create = async (valdity, values) => {
    const description = values
    try {
      const response = await fetch(`${baseUrl}/inbaskets`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({description}),
      });
      const data = await response.json();
      setInbaskets((inbaskets)=>[...inbaskets, data])
      console.log("Created inbasket: ", data);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (id, values) => {
    fetch(`${baseUrl}/inbaskets/${id}`, {
      method: "PATCH",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  const deleteById = async (id) => {
    setInbaskets((inbaskets)=> [...inbaskets.filter(p => p._id !== id)])
    await fetch(`${baseUrl}/inbaskets/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

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
