import { createContext, useContext } from "react";
interface AuthContextProps {
  isLoginMode: boolean;
  setIsLoginMode: (isLoginMode: boolean) => void;
  isAuthenticated: boolean;
  handleEmailPasswordSubmit: (email: string, password: string) => void;
  handleGitHubSubmit: () => void;
  handleGoogleSubmit: () => void;
  handleFacebookSubmit: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isLoginMode: true,
  setIsLoginMode: () => { },
  isAuthenticated: false,
  handleEmailPasswordSubmit: () => { },
  handleGitHubSubmit: () => { },
  handleGoogleSubmit: () => { },
  handleFacebookSubmit: () => { },
});

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
