import React, { useState } from "react";
import classes from "./Login.module.scss";
import { useAuth } from "../../store/auth-context";
import SocialLoginButtons from "./SocialLoginButtons";
import EmailPasswordForm from "./EmailPasswordForm";
import Card from "../UI/Card";

const Login: React.FC = () => {
  const { isLoginMode, handleEmailPasswordSubmit } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleEmailPasswordSubmit(email, password);
  };

  return (
    <div className={`page-container ${classes["login-page"]}`}>
      <h1 className={classes["login-title"]}>
        {isLoginMode ? "Log In" : "Sign Up"}
      </h1>
      <Card className={classes.wrapper}>
        <SocialLoginButtons />
        <div className={classes["center-container"]}>
          <div className={classes.line} />
          <div className={classes.or}>OR</div>
        </div>
        <EmailPasswordForm
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          handleSubmit={handleSubmit}
        />
      </Card>
    </div>
  );
};

export default Login;
