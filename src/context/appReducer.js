import { decodToken, toggleStorage } from "../utils/auth";
import appActions from "./appActions";
export const initialstate = {
  isUserLogedIn: false,
  token: "",
  user: {
    userName: "",
    email: "",
  },
};

export const appReducer = (state = initialstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case appActions.signIn: {
      const { token } = payload;
      toggleStorage(token);
      const user = decodToken(token);

      return {
        ...state,
        isUserLogedIn: true,
        token,
        user: { userName: user.userName, email: user.email },
      };
    }
    case appActions.signOut: {
      toggleStorage();
      return {
        ...state,
        isUserLogedIn: false,
        user: { userName: "", email: "" },
      };
    }

    default:
      return state;
  }
};
