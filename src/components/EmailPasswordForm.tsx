import React from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import classes from "./Login.module.scss";
import { useAuth } from "../store/auth-context";

interface EmailPasswordFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
}

const EmailPasswordForm: React.FC<EmailPasswordFormProps> = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
}) => {
  const { isLoginMode } = useAuth();

  return (
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
        {isLoginMode ? "Log In" : "Sign Up"}
      </Button>
      {isLoginMode && (
        <Link to="/forgot-password" className={classes.link}>
          Forgot password?
        </Link>
      )}
      {isLoginMode && (
        <Link to="/auth/sign-up" className={classes.link}>
          Don't have an account? Sign Up
        </Link>
      )}
    </form>
  );
};

export default EmailPasswordForm;
