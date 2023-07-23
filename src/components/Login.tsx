import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import classes from "./Login.module.scss";
import { useAuth } from "../store/auth-context";

interface LoginProps {
  isLoginMode: boolean;
}

const Login: React.FC<LoginProps> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {
    handleEmailPasswordSubmit,
    handleGitHubSubmit,
    handleGoogleSubmit,
    handleFacebookSubmit,
  } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleEmailPasswordSubmit(email, password);
  };

  return (
    <div className={classes["login-container"]}>
      <h1 className={classes["login-title"]}>
        {props.isLoginMode ? "Log In" : "Sign Up"}
      </h1>
      <div className={classes.wrapper}>
        <div className={classes["left-container"]}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<GitHubIcon className={classes.icon} />}
            onClick={handleGitHubSubmit}
            className={`${classes["login-with"]} ${classes.github}`}
          >
            {props.isLoginMode ? "Log In" : "Sign Up"} with GitHub
          </Button>
          <Button
            fullWidth
            variant="contained"
            startIcon={<GoogleIcon className={classes.icon} />}
            onClick={handleGoogleSubmit}
            className={`${classes["login-with"]} ${classes.google}`}
          >
            {props.isLoginMode ? "Log In" : "Sign Up"} with Google
          </Button>
          <Button
            fullWidth
            variant="contained"
            startIcon={<FacebookIcon className={classes.icon} />}
            onClick={handleFacebookSubmit}
            className={`${classes["login-with"]} ${classes.facbook}`}
          >
            {props.isLoginMode ? "Log In" : "Sign Up"} with Facebook
          </Button>
        </div>
        <div className={classes["center-container"]}>
          <div className={classes.line} />
          <div className={classes.or}>OR</div>
        </div>
        <form className={classes["right-container"]} onSubmit={handleSubmit}>
          <TextField
            className={classes.input}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            className={classes.input}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            className={classes.submit}
            type="submit"
            fullWidth
            variant="contained"
          >
            {props.isLoginMode ? "Log In" : "Sign Up"}
          </Button>
          {props.isLoginMode && (
            <Link to="/forgot-password" className={classes.link}>
              Forgot password?
            </Link>
          )}
          {props.isLoginMode && (
            <Link to="/auth/sign-up" className={classes.link}>
              Don't have an account? Sign Up
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
