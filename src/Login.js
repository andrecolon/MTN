import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

function Login() {
  const signIn = () => {
    // do google auth - timestamp 2:05
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="http://vidordesigns.com/wp-content/uploads/vidor-designs-logo-dark.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
      <p className="register">Or Please register here!</p>
    </div>
  );
}

export default Login;
