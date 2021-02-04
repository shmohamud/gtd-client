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
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      setReviews((reviews)=>[...reviews, data])
      console.log("Created review: ", data);
    } catch (err) {
      setErr(err);
    }
  };

  const updateById = async (id, values) => {
    fetch(`${baseUrl}/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
  };

  const deleteById = async (id) => {
    setReviews((reviews)=> [...reviews.filter(p => p._id !== id)])
    await fetch(`${baseUrl}/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });

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
