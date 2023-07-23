import React from "react";
import { Button, TextField } from "@mui/material";
import classes from "./Login.module.scss";

interface LoginFormProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent) => void;
  isLoginMode: boolean;
}

const LoginForm: React.FC<LoginFormProps> = (props) => {
  return (
    <form className={classes["right-container"]} onSubmit={props.handleSubmit}>
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
        value={props.email}
        onChange={(e) => props.setEmail(e.target.value)}
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
        value={props.password}
        onChange={(e) => props.setPassword(e.target.value)}
      />
      <Button
        className={classes.submit}
        type="submit"
        fullWidth
        variant="contained"
      >
        {props.isLoginMode ? "Log In" : "Sign Up"}
      </Button>
    </form>
  );
};

export default LoginForm;
