import React from "react";
import { useAppContext } from "../context/AppContextProvider";

const AuthGuard = ({ children }) => {
  const { state } = useAppContext();
  if (!state.isUserLogedIn) {
    return (
      <div>
        <h1>you are not authenticated</h1>
        <h3>please Sign In</h3>
      </div>
    );
  }
  return <>{children}</>;
};

export default AuthGuard;
