import React from "react";
import Login from "../../components/common/Login";
import Signup from "../../components/common/Signup";
import Logo from "../../components/common/Logo";
import AppBlurb from "../../components/common/AppBlurb";

const LandingView = () => {
  return (
    <>
      <Logo />
      <div style={{ display: "flex", flexDirection: "column" }}>
        <AppBlurb/>
        <Login />
        <Signup />
      </div>
    </>
  );
};

export default LandingView;
