import React from "react";
import baseUrl from "./baseUrl";
import { useState } from "react";

export default function useAuth() {
  const [token, setToken] = useState([]);
  const [me, setMe] = useState({})
  const [err, setErr] = useState(null);

  const signup = async (validity, values) => {
    try {
      const response = await fetch(`${baseUrl}/signup`, {
        method: "POST",
        headers: {
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      const data = await response.json();
      const { accessToken } = data;
      if (!token.length) {
        setToken(accessToken);
      }
      setMe(()=>data)
    } catch (err) {
      console.log("Error: ", err);
    }
  };

  const logout = async () => {
    let username = me.username
    console.log("Me: ", me, username)
    console.log("In logout hook!!!")
 
    try {
      const response = await fetch(`${baseUrl}/logout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({"username":username}),
      });
      const data = await response.json();
      setToken(()=>[]);
      setMe(()=>data)
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
