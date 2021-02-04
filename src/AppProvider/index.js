import React from "react";
import { createContext } from "react";
import useAction from "../hooks/useAction";
import useProject from "../hooks/useProject";
import useBraindump from "../hooks/useBraindump";
import useForm from "../hooks/useForm";
import useReview from "../hooks/useReview";
import useReference from "../hooks/useReference";
import useIncubate from "../hooks/useIncubate";
import useInbasket from "../hooks/useInbasket";

const AppCtx = createContext();

const AppProvider = ({ children }) => {
  let value = {
    useProject: useProject(),
    useAction: useAction(),
    useBraindump: useBraindump(),
    useReview: useReview(),
    useReference: useReference(),
    useIncubate: useIncubate(),
    useInbasket: useInbasket(),
    useForm,
  };

  return <AppCtx.Provider value={value}>{children}</AppCtx.Provider>;
};

export default AppProvider;

export const useApp = () => React.useContext(AppCtx);
