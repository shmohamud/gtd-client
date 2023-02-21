import React from "react";
import { useApp } from "../../AppProvider";
import InbasketList from "../../components/inbasket/List";
import AutogrowTextarea from "../../components/common/AutogrowTextarea";
import Button from "@material-ui/core/Button";
import "./index.css";

const InbasketPage = () => {
  const { useAuth, useForm, useInbasket } = useApp();
  const { token } = useAuth;
  const { create } = useInbasket;

  const onSubmit = (validity, values) => {
    console.log("Values: ", values);
    create(token, {}, values);
  };

  const { handleSubmit } = useForm(onSubmit);

  return (
    <div className="inbasket-page-container">
      <h1>In Basket</h1>
      <div className="inputs-container">
        <AutogrowTextarea />
        <Button onClick={handleSubmit}>ADD</Button>
      </div>

      <InbasketList />
    </div>
  );
};

export default InbasketPage;
