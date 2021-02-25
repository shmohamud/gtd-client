import React from "react";
import { braindumps as api } from "./api";
import { useState } from "react";

export default function useBraindump() {
  const [braindump, setBraindump] = useState([]);
  const [braindumps, setBraindumps] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all braindumps
  const getAll = async (token) => {
    try {
      const response = await api.get(token);
      const data = await response.json();
      setBraindumps(data);
      return data;
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (token, validity, body) => {
    try {
      const response = await api.create(token, body);
      const data = await response.json();
      setBraindumps((braindumps) => [...braindumps, data]);
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  const deleteById = async (token) => {
    try {
      await api.deleteById(token, braindumps[0]._id);
      setBraindumps((braindumps) => [
        ...braindumps.filter((item => item._id !== braindumps[0]._id))
      ])
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  return {
    braindumps,
    braindump,
    err,
    setBraindump,
    getAll,
    create,
    deleteById,
  };
}
