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
import useAuth from "../hooks/useAuth";
import useModal from "../hooks/useModal";

type ContextValue = {
  useForm: () => () => {
    handleChange: () => {},
    handleSubmit: () => {},
    values: {},
    setValues: () => {},
    validity: boolean,
    errs: any[],
    clearErr: () => {},
  }
  [k: string]: any;
}

const AppCtx = createContext<ContextValue | null>(null);

const AppProvider = (props:any) => {
  let value = {
    useAuth: useAuth(),
    useForm: useForm,
    useModal: useModal(),
    useAction: useAction(),
    useProject: useProject(),
    useBraindump: useBraindump(),
    useReview: useReview(),
    useReference: useReference(),
    useIncubate: useIncubate(),
    useInbasket: useInbasket(),
  };

  return <AppCtx.Provider value={value}>{props.children}</AppCtx.Provider>;
};

export default AppProvider;

export const useApp = () => React.useContext(AppCtx);
