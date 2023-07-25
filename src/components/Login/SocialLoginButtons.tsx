import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
// import classes from "./Login.module.scss";
import { useAuth } from "../../store/auth-context";
import classes from "./SocialLoginButtons.module.scss";

const SocialLoginButtons: React.FC = () => {
  const {
    isLoginMode,
    handleGitHubSubmit,
    handleGoogleSubmit,
    handleFacebookSubmit,
  } = useAuth();

  return (
    <div className={classes["left-container"]}>
      <Button
        fullWidth
        variant="contained"
        startIcon={<GitHubIcon className={classes.icon} />}
        onClick={handleGitHubSubmit}
        className={`${classes["login-with"]} ${classes.github}`}
      >
        {isLoginMode ? "Log In" : "Sign Up"} with GitHub
      </Button>
      <Button
        fullWidth
        variant="contained"
        startIcon={<GoogleIcon className={classes.icon} />}
        onClick={handleGoogleSubmit}
        className={`${classes["login-with"]} ${classes.google}`}
      >
        {isLoginMode ? "Log In" : "Sign Up"} with Google
      </Button>
      <Button
        fullWidth
        variant="contained"
        startIcon={<FacebookIcon className={classes.icon} />}
        onClick={handleFacebookSubmit}
        className={`${classes["login-with"]} ${classes.facbook}`}
      >
        {isLoginMode ? "Log In" : "Sign Up"} with Facebook
      </Button>
    </div>
  );
};

export default SocialLoginButtons;
