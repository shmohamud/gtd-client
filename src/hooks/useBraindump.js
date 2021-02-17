import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useBraindump() {
  const [braindump, setBraindump] = useState([]);
  const [braindumps, setBraindumps] = useState([]);
  const [err, setErr] = useState(null);
  //Get list of all braindumps
  const getAll = async (token) => {
    try {
      const response = await fetch(`${baseUrl}/braindumps`, {
        headers: new Headers({
          'Authorization' : `Bearer ${token}`,
          "Content-Type": "application/json"
        }), 
      });
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

  const create = async (token, validity, values) => {
    try {
      const body = { description: values };
      const response = await fetch(`${baseUrl}/braindumps`, {
        method: "POST",
        headers: new Headers({
          'Authorization' : `Bearer ${token}`,
          "Content-Type": "application/json"
        }),
        body: JSON.stringify(body),
      });
      const data = await response.json();
      setBraindumps((braindumps) => [...braindumps, data]);
    } catch (err) {
      console.log("Error: ", err)
      setErr(err);
    }
  };

  const deleteById = async (token, id) => {
    try {
      await fetch(`${baseUrl}/braindumps/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization' : `Bearer ${token}`,
          "Content-Type": "application/json"
        },
      });
      setBraindumps((braindumps) => [
        ...braindumps.filter((b) => b._id !== id),
      ]);
    } catch (err) {
      console.log("Error: ", err)
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
