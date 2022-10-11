import React from "react";
import { inbaskets as api } from "./api";
import { useState } from "react";

export default function useInbasket() {
  const [inbasket, setInbasket] = useState([]);
  const [inbaskets, setInbaskets] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all inbaskets
  const getAll = async (token) => {
    try {
      const response = await api.get(token);
      const data = await response.json();
      setInbaskets(data);
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (token, valdity, body) => {
    try {
      const response = await api.create(token, body);
      const data = await response.json();
      setInbaskets((inbaskets) => [...inbaskets, data]);
    } catch (err) {
      setErr(err);
    }
  };

  const deleteById = async (token) => {
    try {
      await api.deleteById(token, inbasket._id);
      setInbaskets((inbaskets) => [
        ...inbaskets.filter((i) => i._id !== inbasket._id),
      ]);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return {
    inbaskets,
    inbasket,
    err,
    setInbasket,
    getAll,
    create,
    deleteById,
  };
}
