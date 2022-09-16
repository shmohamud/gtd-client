import React from "react";
import styles from "./index.css";
import { useApp } from "../../AppProvider";
import InbasketList from "../../components/inbasket/List";
import TextInput from "../../components/inbasket/TextInput";

const InbasketPage = () => {
  const { useAuth, useInbasket } = useApp();
  const {token} = useAuth
  const { create } = useInbasket;

  const handleKeyPress = (e) => {
    if (e.key == "Enter" && e.target.value.length) {
      let body = {description: e.target.value}
      create(token, {}, body);
      e.preventDefault();
      e.target.value = "";
    }
  };

  return (
    <div className="inbasket-view-container">
      <h1>In Basket</h1>
      <TextInput keyPress={handleKeyPress} />
      <InbasketList />
    </div>
  );
};

export default InbasketPage;
