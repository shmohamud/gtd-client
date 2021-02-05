import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppDrawer from "../common/AppDrawer";
import Header from "../common/Header";
import ProjectsView from "../../views/ProjectsView";
import ArchiveView from "../../views/ArchiveView";
import NowView from "../../views/NowView";
import WeekView from "../../views/WeekView";
import InBasketView from "../../views/InBasketView";
import BraindumpView from "../../views/BraindumpView";
import quotations from "../common/Footer/quotations";
import { useApp } from "../../AppProvider";
import LandingView from "../../views/LandingView";
import styles from "./index.css";

const App = () => {
  const { useAuth } = useApp();
  const { token } = useAuth;
  const generateRandomIdx = () => {
    let idx = Math.floor(Math.random() * quotations().length);
    return idx;
  };

  const [quotationIndex, setQuotationIndex] = useState(0);

  useEffect(() => {
    setQuotationIndex(() => generateRandomIdx());
  }, []);

  return !token.length ? (
    <div>
      <LandingView />
    </div>
  ) : (
    <div className="container">
      <Header />
      <main>
        <AppDrawer />
        <Switch>
        <Route
            path="/now"
            render={(props) => {
              return <NowView quotationIndex={quotationIndex} {...props} />;
            }}
          ></Route>
          <Route path="/week" component={WeekView}></Route>
          <Route
            path="/inbasket"
            render={(props) => {
              return <InBasketView {...props} />;
            }}
          ></Route>
          <Route
            path="/braindump"
            render={(props) => {
              return <BraindumpView {...props} />;
            }}
          ></Route>
          <Route path="/projects" component={ProjectsView}></Route>
          <Route path="/archive">
            <ArchiveView />
          </Route>
     
          <Route
            path="/"
            render={(props) => {
              return <NowView quotationIndex={quotationIndex} {...props} />;
            }}
          ></Route>
        </Switch>
      </main>
    </div>
  );
};

export default App;
