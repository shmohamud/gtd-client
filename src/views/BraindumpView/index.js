import React from "react";
import styles from "./index.css";
import TextInput from "../../components/braindump/TextInput";
import BraindumpList from "../../components/braindump/List";
import {useApp} from '../../AppProvider'

const BraindumpView = () => {

  const {useBraindump} = useApp();
  const { create, deleteById} = useBraindump
  
  const handleKeyPress = (e) => {
    if (e.key == "Enter" && e.target.value.length) {
      create({}, e.target.value)
      e.preventDefault();
      e.target.value = "";
    }
  };
  return (
    <div className="process-view-main">
      <h1>Braindump</h1>
      <TextInput keyPress={handleKeyPress} />
      <BraindumpList deleteById={deleteById} />
    </div>
  );
};

export default BraindumpView;
