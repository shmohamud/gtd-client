import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useReview() {
  const [review, setReview] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all reviews --- half implemented
  const getAll = async () => {
    try {
      const response = await fetch(`${baseUrl}/reviews`);
      const data = await response.json();
      setReviews(data);
    } catch (err) {
      setErr(err);
    }
  };

  const getById = async (id) => {
    try {
      const response = await fetch(`${baseUrl}/reviews/${id}`);
      const data = await response.json();
      setReview(data);
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (validity, values) => {
    try {
      const response = await fetch(`${baseUrl}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setReviews((reviews) => [...reviews, data]);
      console.log("Created review: ", data);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (id, values) => {
    try {
      await fetch(`${baseUrl}/reviews/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",},
        body: JSON.stringify(values),
      });
      setReviews((reviews) => {
        reviews.map((r) =>
          r._id === id ? Object.assign({}, r, { values }) : r
        );
      });
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  const deleteById = async (id) => {
    try {
      await fetch(`${baseUrl}/reviews/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setReviews((reviews) => [...reviews.filter((r) => r._id !== id)]);
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  return {
    reviews,
    getAll,
    getById,
    create,
    updateById,
    deleteById,
    err,
  };
}
