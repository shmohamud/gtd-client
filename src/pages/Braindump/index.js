import React from "react";
import AutogrowTextarea from "../../components/common/AutogrowTextarea";
import BraindumpList from "../../components/braindump/List";
import { useApp } from "../../AppProvider";
import Button from "@material-ui/core/Button";
import "./index.css";

const BraindumpPage = () => {
  const { useAuth, useBraindump, useForm } = useApp();
  const { create } = useBraindump;
  const { token } = useAuth;

  const onSubmit = (validity, values) => {
    console.log("Values: ", values);
    create(token, {}, values);
  };

  const { handleChange, handleSubmit } = useForm(onSubmit);

  return (
    <div className="braindump-page-container">
      <h1>Braindump</h1>
      <div className="inputs-container">
        <AutogrowTextarea
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <Button onClick={handleSubmit}>ADD</Button>
      </div>
      <BraindumpList />
    </div>
  );
};

export default BraindumpPage;
