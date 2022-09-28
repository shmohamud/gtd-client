import React from "react";
import { incubates as api } from "./api";
import { useState } from "react";

export default function useIncubate() {
  const [incubate, setIncubate] = useState([]);
  const [incubates, setIncubates] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all incubates
  const getAll = async (token) => {
    try {
      const response = await api.get(token);
      const data = await response.json();
      setIncubates(data);
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (token, validity, body) => {
    try {
      const response = await api.create(token, body);
      const data = await response.json();
      setIncubates((incubates) => [...incubates, data]);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (token, body) => {
    try {
      await api.updateById(token, body, incubate._id);
      setIncubates((incubates) => {
        incubates.map((_i) =>
          _i._id === incubate._id ? Object.assign({}, _i, { body }) : _i
        );
      });
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  const deleteById = async (token) => {
    try {
      await api.deleteById(token, incubate._id);
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
    incubate,
    err,
    setIncubate,
    getAll,
    create,
    updateById,
    deleteById,
  };
}
