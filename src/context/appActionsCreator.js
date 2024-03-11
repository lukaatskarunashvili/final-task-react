import actions from "./appActions";
export const signIn = (payload) => {
  return {
    type: actions.signIn,
    payload,
  };
};
export const signOut = () => {
  return {
    type: actions.signOut,
  };
};
