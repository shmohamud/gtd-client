import React, { useEffect } from "react";
import autosize from "autosize";
import "./index.css";

const AutogrowTextarea = ({ handleSubmit, handleChange }) => {
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
