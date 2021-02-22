import React from "react";
import baseUrl from "./api/baseUrl";
import { useState } from "react";
import { reviews as api } from "./api";

export default function useReview() {
  const [review, setReview] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);

  //Get list of all reviews --- half implemented
  const getAll = async (token) => {
    try {
      const response = await api.get(token);
      const data = await response.json();
      setReviews(data);
    } catch (err) {
      setErr(err);
    }
  };

  const create = async (token, validity, body) => {
    try {
      const response = api.create(token, body);
      const data = await response.json();
      setReviews((reviews) => [...reviews, data]);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (token, validity, body) => {
    try {
      await api.updateById(token, body, review._id);
      setReviews((reviews) => {
        reviews.map((r) =>
          r._id === review._id ? Object.assign({}, r, { body }) : r
        );
      });
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  const deleteById = async (token) => {
    try {
      await api.deleteById(token, review._id);
      setReviews((reviews) => [...reviews.filter((r) => r._id !== review._id)]);
    } catch (err) {
      console.log("Error: ", err);
      setErr(err);
    }
  };

  return {
    reviews,
    review,
    err,
    getAll,
    create,
    updateById,
    deleteById,
  };
}
