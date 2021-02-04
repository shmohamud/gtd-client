import React from "react";
import TextField from "@material-ui/core/TextField";
import { useApp } from "../../../AppProvider";

const UrlInput = ({ urls, setUrls }) => {
  const { useForm } = useApp();
  const { handleChange, handleSubmit, values } = useForm();
  const handleKeyPress = (e) => {
    if (e.key == "Enter" && e.target.value.length) {
      e.preventDefault();
      console.log("values of url: ", values["url"]);
      let url = values["url"];
      if (isValidHttpUrl(url)) {
        setUrls((urls) => [...urls, values["url"]]);
      }

      e.target.value = "";
    }
  };

  function isValidHttpUrl(string) {
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }
  return (
    <>
      <form
        autoComplete="off"
        onKeyDown={handleKeyPress}
        onChange={handleChange}
      >
        <TextField name={"url"} label={"Add Urls to reference"} />
      </form>
      <ol>
        {urls.map((url) => (
          <li>{url}</li>
        ))}
      </ol>
    </>
  );
};

export default UrlInput;
