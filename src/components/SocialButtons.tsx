import React from "react";
import { Button } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import classes from "./Login.module.scss";

interface SocialButtonsProps {
  onGitHubSubmit: () => void;
  onGoogleSubmit: () => void;
  onFacebookSubmit: () => void;
}

const SocialButtons: React.FC<SocialButtonsProps> = (props) => {
  return (
    <div className={classes["left-container"]}>
      <Button
        fullWidth
        variant="contained"
        startIcon={<GitHubIcon className={classes.icon} />}
        onClick={props.onGitHubSubmit}
        className={`${classes["login-with"]} ${classes.github}`}
      >
        Log In with GitHub
      </Button>
      <Button
        fullWidth
        variant="contained"
        startIcon={<GoogleIcon className={classes.icon} />}
        onClick={props.onGoogleSubmit}
        className={`${classes["login-with"]} ${classes.google}`}
      >
        Log In with Google
      </Button>
      <Button
        fullWidth
        variant="contained"
        startIcon={<FacebookIcon className={classes.icon} />}
        onClick={props.onFacebookSubmit}
        className={`${classes["login-with"]} ${classes.facbook}`}
      >
        Log In with Facebook
      </Button>
    </div>
  );
};

export default SocialButtons;
