import React from "react";
import baseUrl from "./baseUrl";
import CustomException from "../utils/CustomException";
import { useState } from "react";

export default function useAuth() {
  const [token, setToken] = useState([]);
  const [me, setMe] = useState({});
  const [err, setErr] = useState({});

  const signup = async (validity, values) => {
    const response = await fetch(`${baseUrl}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    if (response.ok) {
      return;
    }
    setErr(() => Object.assign({}, data.error));
    throw new CustomException(data.error);
  };

  const login = async (validity, values) => {
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      const { accessToken } = data || "";
      setToken(accessToken);
      setMe(() => data);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const logout = async () => {
    let username = me.username;
    try {
      const response = await fetch(`${baseUrl}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username }),
      });
      const data = await response.json();
      setToken(() => []);
      setMe(() => data);
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  return {
    token: token,
    me: me,
    signup,
    login,
    logout,
    err: err,
  };
}
