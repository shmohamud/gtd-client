import React from "react";
import baseUrl from "./api/baseUrl";
import CustomException from "../utils/CustomException";
import { useState } from "react";
import { auth as api } from "./api";

export default function useAuth() {
  const [token, setToken] = useState([]);
  const [me, setMe] = useState({});
  const [err, setErr] = useState({});

  const signup = async (validity, body) => {
    const response = await api.signup(body);
    const data = await response.json();
    if (response.ok) {
      return;
    }
    setErr(() => Object.assign({}, data.error));
    throw new CustomException(data.error);
  };

  const login = async (validity, body) => {
    try {
      const response = await api.login(body);
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
      await api.logout(username);
      setToken(() => []);
      setMe(() => {});
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
