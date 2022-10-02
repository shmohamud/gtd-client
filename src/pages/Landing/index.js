import React from "react";
import Login from "../../components/common/Login";
import Signup from "../../components/common/Signup";
import Logo from "../../components/common/Logo";
import "./index.css"
import AppBlurb from "../../components/common/AppBlurb";

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <Logo />
      <div
      >
        <AppBlurb />
        <div
        >
          <Login />
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
