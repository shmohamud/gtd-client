import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import AppDrawer from "../components/common/AppDrawer";
import Header from "../components/common/Header";
import ProjectsPage from "../pages/Project";
import ArchivePage from "../pages/Archive";
import NowPage from "../pages/Now";
import WeekPage from "../pages/Week";
import InbasketPage from "../pages/Inbasket";
import BraindumpPage from "../pages/Braindump";
import quotations from "../components/common/Footer/quotations";
import { useApp } from "../AppProvider";
import LandingPage from "../pages/Landing";
import ModalRoot from "../components/common/ModalRoot";
import "./index.css";

const App = () => {
  const { useAuth, useModal } = useApp();
  const { token } = useAuth;
  const { modalType, modalProps } = useModal;

  const generateRandomIdx = () => {
    let idx = Math.floor(Math.random() * quotations().length);
    return idx;
  };

  const [quotationIndex, setQuotationIndex] = useState(0);

  useEffect(() => {
    setQuotationIndex(() => generateRandomIdx());
  }, []);

  return !token.length ? (
      <LandingPage />
  ) : (
    <>
      <ModalRoot modalType={modalType} modalProps={modalProps} />
      <div className="container">
        <Header />
        <main>
          <AppDrawer />
          <Switch>
            <Route
              path="/now"
              render={(props) => {
                return <NowPage quotationIndex={quotationIndex} {...props} />;
              }}
            ></Route>
            <Route path="/week" component={WeekPage}></Route>
            <Route
              path="/inbasket"
              render={(props) => {
                return <InbasketPage {...props} />;
              }}
            ></Route>
            <Route
              path="/braindump"
              render={(props) => {
                return <BraindumpPage {...props} />;
              }}
            ></Route>
            <Route
              path="/project"
              render={(props) => {
                return <ProjectsPage {...props} />;
              }}
            />
            <Route path="/archive">
              <ArchivePage />
            </Route>

            <Route
              path="/"
              render={(props) => {
                return <NowPage quotationIndex={quotationIndex} {...props} />;
              }}
            ></Route>
          </Switch>
        </main>
      </div>
    </>
  );
};

export default App;
