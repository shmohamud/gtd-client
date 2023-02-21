import React, { useEffect } from "react";
import autosize from "autosize";
import { useApp } from "../../../AppProvider";
import "./index.css";

const AutogrowTextarea = () => {
  const { useAuth, useForm, useInbasket } = useApp();
  const { token } = useAuth;
  const { create } = useInbasket;

  const onSubmit = (validity, values) => {
    console.log("Values: ", values);
     create(token, {}, values);
  };

  const { handleChange, handleSubmit } = useForm(onSubmit);

  useEffect(() => {
    autosize(document.getElementsByClassName("autogrow-textarea")[0]);
  }, []);

  const onKeyDown = (e) => {
    if (e.key == "Enter" && e.target.value.length) {
      e.preventDefault();
      handleSubmit(e);
      e.target.value = "";
    }
  };
  return (
    <textarea
      className="autogrow-textarea"
      name="description"
      onChange={handleChange}
      onKeyDown={onKeyDown}
    ></textarea>
  );
};

export default AutogrowTextarea;
