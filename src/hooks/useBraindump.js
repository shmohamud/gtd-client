import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useBraindujmp() {
  const [braindump, setBraindump] = useState([]);
  const [braindumps, setBraindumps] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all braindumps
  const getAll = async () => {
    try {
      const response = await fetch(`${baseUrl}/braindumps`);
      const data = await response.json();
      setBraindumps(data);
      return data;
    } catch (err) {
      setErr(err);
    }
  };

  const getById = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/braindumps/${id}`);
      const data = await response.json();
      setBraindump(data);
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (validity, values) => {
    const dump = { description: values };
    try {
      const response = await fetch(`${baseUrl}/braindumps`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dump),
      });
      const data = await response.json();
      setBraindumps((items) => [...items, data]);
    } catch (err) {
      setErr(err);
    }
  };

  const deleteById = async (id) => {
    try {
      await fetch(`${baseUrl}/braindumps/${id}`, {
        method: "DELETE",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      });
      setBraindumps((braindumps) => [
        ...braindumps.filter((p) => p._id !== id),
      ]);
    } catch (err) {
      setErr(err);
    }
  };

  return {
    braindumps,
    braindump,
    getAll,
    getById,
    create,
    deleteById,
    err,
  };
}
