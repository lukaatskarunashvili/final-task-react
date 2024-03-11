import React, { useState } from "react";
import authActions from "../../constants/authAction";
import { authHandler } from "../../api/auth";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import appRoutes from "../../constants/routes";

const SignUpForm = () => {
  const [isloading, setIsloading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
    email: "",
  });

  const clickHandler = (e) => {
    e.preventDefault();
    setIsloading(true);
    authHandler(authActions.register, user)
      .then((data) => {
        navigate(appRoutes.signIn, { state: { success: true } });
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
        placeholder="userName"
      />
      <input
        onChange={(e) => {
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }}
        name="email"
        placeholder="email"
      />
      <input
        onChange={(e) => {
          setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
        }}
        name="password"
        placeholder="password"
      />
      <button type="submit" onClick={clickHandler}>
        sign Up
      </button>
      {isloading && <BeatLoader color="#36d7b7" />}
    </form>
  );
};

export default SignUpForm;
