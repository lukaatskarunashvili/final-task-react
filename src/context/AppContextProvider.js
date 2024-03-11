import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { appReducer, initialstate } from "./appReducer";
import { signIn } from "./appActionsCreator";
import { validateToken } from "../utils/auth";
const appContext = createContext();
const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialstate);
  const vaulue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state]
  );
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token && validateToken(token)) {
      dispatch(signIn({ token }));
    }
  }, []);

  return <appContext.Provider value={vaulue}>{children}</appContext.Provider>;
};
export const useAppContext = () => {
  const context = useContext(appContext);
  if (context) {
    return context;
  }
  throw new Error("app context error");
};
export default AppContextProvider;
