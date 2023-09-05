import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import AuthContext from "./auth-context";
import config from "../../config/config";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoginMode(location.pathname === "/auth/login");
  }, [location]);

  const handleEmailPasswordSubmit = async (email: string, password: string) => {
    const data = {
      email: email,
      password: password,
    };
    try {
      if (isLoginMode) {
        const response = await axios.post(
          `http://${config.authenticationService.host}:${config.authenticationService.port}/auth/login`,
          data
        );
        console.log("login successful!", response.data);

        setIsAuthenticated(true);

        navigate("/user/dashboard");
      } else {
        const response = await axios.post(
          `http://${config.authenticationService.host}:${config.authenticationService.port}/auth/sign-up`,
          data
        );
        console.log("sign-up successful!", response.data);

        navigate("/auth/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleGitHubSubmit = async () => {
    try {
      window.open(`http://${config.authenticationService.host}:${config.authenticationService.port}/github`, "_self");

      setIsAuthenticated(true);
    } catch (err) {
      console.error("GitHub Sign-in failed!", err);
    }
  };

  const handleGoogleSubmit = async () => {
    // Todo: login with Google
  };

  const handleFacebookSubmit = async () => {
    // Todo: login with Facebook
  };

  return (
    <AuthContext.Provider
      value={{
        isLoginMode,
        setIsLoginMode,
        isAuthenticated,
        handleEmailPasswordSubmit,
        handleGitHubSubmit,
        handleGoogleSubmit,
        handleFacebookSubmit,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
