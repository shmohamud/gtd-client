import React from "react";
import { createContext } from "react";
import useAction from '../hooks/useAction';
import useProject from '../hooks/useProject';
import useBraindump from '../hooks/useBraindump';
import useForm from '../hooks/useForm';

const AppCtx = createContext();

const AppProvider = ({children}) => {
  let value = {
    useProject:useProject(),
    useAction:useAction(),
    useBraindump: useBraindump(),
    useForm
  };


  return (
      <AppCtx.Provider value={value}>
          {children}
      </AppCtx.Provider>
  );
};

export default AppProvider;

export const useApp = () => React.useContext(AppCtx)
