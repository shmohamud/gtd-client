
import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useReference() {
  const [err, setErr] = useState(null);

  //Get list of all references --- half-implemented
  const getAll = async () => {
    try {
      const response = await fetch(`${baseUrl}/references`);
      const data = await response.json();
    } catch (err) {
      setErr(err);
    }
  };

  const getById = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/references/${id}`);
      const data = await response.json();
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (values, urls) => {
      values.urls = urls
    try {
      const response = await fetch(`${baseUrl}/references`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (id, values) => {
    fetch(`${baseUrl}/references/${id}`, {
      method: "PATCH",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  const deleteById = async (id) => {
    await fetch(`${baseUrl}/references/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

  };

  return {
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    err,
  };
}
