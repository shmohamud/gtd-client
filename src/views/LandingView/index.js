import React from "react";
import Signup from "../../components/common/Signup";
import Login from "../../components/common/Login";
import Logo from "../../components/common/Logo";

const LandingView = () => {
  return (
    <>
      <Logo />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Login />
        <Signup />
      </div>
    </>
  );
};

export default LandingView;
