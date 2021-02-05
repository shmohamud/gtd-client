import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useAuth() {
  const [token, setToken] = useState([]);
  const [err, setErr] = useState(null);

  const signup = async (validity, values) => {
    try {
      const response = await fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      setErr(err);
    }
  };

  const login = async (validity, values) => {
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
        
      })
      const data = await response.json();
      const {accessToken} = data
      setToken(accessToken)
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const logout = () => {
    setToken([])
  }

  return {
    token: token,
    setToken,
    signup,
    login,
    logout,
    err: err,
  };
}
