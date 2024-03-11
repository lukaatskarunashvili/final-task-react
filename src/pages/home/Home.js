import React from "react";

import { useAppContext } from "../../context/AppContextProvider";
import { signOut } from "../../context/appActionsCreator";

const Home = () => {
  const {
    state: { user },
    dispatch,
  } = useAppContext();

  return (
    <div>
      <h1>Home</h1>
      {user.userName && <h3>Heloo {user.userName}</h3>}
      <button
        onClick={() => {
          dispatch(signOut());
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Home;
