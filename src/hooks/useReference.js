import React from "react";
import {references as api} from './api'
import { useState } from "react";

export default function useReference() {
  const [err, setErr] = useState(null);
  const [reference, setReference] = useState([]);
  const [references, setReferences] = useState([]);

  //Get list of all references --- 3/4 implemented
  const getAll = async (token) => {
      try {
        const response = await api.get(token)
        const data = await response.json();
        setReferences(data);
      } catch (err) {
        setErr(err);
      }
    };

  const create = async (token, validity, body) => {
    try {
      const response = await api.create(token, body)
      const data = await response.json();
      setReferences((references) => [...references, data]);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (token, validity, body) => {
    try {
      await api.updateById(token, body, reference._id)
      setReferences((references) => {
        references.map((r) =>
          r._id === reference._id ? Object.assign({}, r, { body }) : r
        );
      });
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  const deleteById = async (token) => {
    try {
      await api.delete(token, reference._id)
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  return {
    references,
    reference,
    err,
    setReference,
    getAll,
    create,
    updateById,
    deleteById
  };
}
