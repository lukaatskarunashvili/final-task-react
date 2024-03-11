import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authHandler } from "../../api/auth";
import authActions from "../../constants/authAction";
import AppRoutes from "../../constants/routes";
import { BeatLoader } from "react-spinners";
import { useAppContext } from "../../context/AppContextProvider";
import { signIn } from "../../context/appActionsCreator";

const SignInForm = () => {
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useAppContext();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });
  const clickHandler = (e) => {
    e.preventDefault();
    setIsloading(true);
    authHandler(authActions.logIn, user)
      .then((data) => {
        dispatch(signIn(data));
        navigate(AppRoutes.home);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsloading(false);
      });
  };
  return (
    <form>
      <input
        onChange={(e) => {
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }}
        name="userName"
        placeholder="username"
      />
      <input
        onChange={(e) => {
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }}
        name="password"
        placeholder="password"
      />
      <button type="submit" onClick={clickHandler}>
        Sign In
      </button>
      {isloading && <BeatLoader color="#36d7b7" />}
    </form>
  );
};

export default SignInForm;
