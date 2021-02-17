import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useReference() {
  const [err, setErr] = useState(null);
  const [reference, setReference] = useState([]);
  const [references, setReferences] = useState([]);

  //Get list of all references --- 3/4 implemented
  const getAll = async (token) => {
      try {
        const response = await fetch(`${baseUrl}/references`, {
          method: "GET",
          headers: {
            'Authorization': `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setReferences(data);
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

  const create = async (token, validity, values, urls) => {
    let body = values;
    body.urls = urls;
    try {
      const response = await fetch(`${baseUrl}/references`, {
        method: "POST",
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(body),
      });
      const data = await response.json();
      setReferences((references) => [...references, data]);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (id, values) => {
    let body = values;
    try {
      fetch(`${baseUrl}/references/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      setReferences((references) => {
        references.map((r) =>
          r._id === id ? Object.assign({}, r, { values }) : r
        );
      });
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  const deleteById = async (token, id) => {
    try {
      await fetch(`${baseUrl}/references/${id}`, {
        method: "DELETE",
        headers: new Headers({
          'Authorization': `Bearer ${token}`,
          "Content-Type": "application/json",
        }),
      });
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
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
