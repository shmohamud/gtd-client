import React from "react";
import styles from "./index.css";
import { useApp } from "../../AppProvider";
import InbasketList from "../../components/inbasket/List";
import TextInput from "../../components/inbasket/TextInput";

const InBasketView = () => {
  const { useInbasket } = useApp();
  const { create, deleteById } = useInbasket;

  const handleKeyPress = (e) => {
    if (e.key == "Enter" && e.target.value.length) {
      const { name, value } = e.target;
      create({}, e.target.value);
      e.preventDefault();
      e.target.value = "";
    }
  };
  return (
    <div className="process-view-main">
      <h1>In Basket</h1>
      <TextInput keyPress={handleKeyPress} />
      <InbasketList deleteById={deleteById} />
    </div>
  );
};

export default InBasketView;
