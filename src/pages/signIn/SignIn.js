import React from "react";
import { useLocation } from "react-router-dom";
import SignInForm from "../../components/signInForm/SignInForm";

const SignIn = () => {
  const location = useLocation();
  console.log(location.state);
  return (
    <div>
      {location?.state?.success && <h1> Congrats! successfuly registerd!</h1>}
      <h1>SignIn</h1>
      <SignInForm />
    </div>
  );
};

export default SignIn;
