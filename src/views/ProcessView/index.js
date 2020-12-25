import React, { useState } from "react";
import styles from "./index.css";
import TextInput from "../../components/braindump/TextInput";
import BraindumpList from "../../components/braindump/List";

//This view shows all actions for a given week organized by project.

const ProcessView = ({ project }) => {
  const [items, setItems] = useState([]);
  const handleKeyPress = (e) => {
    console.log("E: ", e.key);
    if (e.key == "Enter") {
      console.log("value: ", e.target.value);
      setItems((items) => [...items, e.target.value]);
      e.preventDefault();
      e.target.value = "";
    }
  };
  return (
    <div className="process-view-main">
      <h1>Braindump</h1>
      <TextInput keyPress={handleKeyPress} />
      <BraindumpList length={items.length} items={items} />
    </div>
  );
};

export default ProcessView;
