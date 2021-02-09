import React from "react";
import styles from "./index.css";
import TextInput from "../../components/braindump/TextInput";
import BraindumpList from "../../components/braindump/List";
import {useApp} from '../../AppProvider'

const BraindumpView = () => {
  const {useAuth, useBraindump} = useApp();
  const { create } = useBraindump
  const {token} = useAuth

  const handleKeyPress = (e) => {
    if (e.key == "Enter" && e.target.value.length) {
      create(token, {}, e.target.value)
      e.preventDefault();
      e.target.value = "";
    }
  };
  return (
    <div className="process-view-main">
      <h1>Braindump</h1>
      <TextInput keyPress={handleKeyPress} />
      <BraindumpList />
    </div>
  );
};

export default BraindumpView;
