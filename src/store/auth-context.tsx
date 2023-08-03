import { createContext, useContext } from "react";
interface AuthContextProps {
  isLoginMode: boolean;
  setIsLoginMode: (isLogin: boolean) => void;
  handleEmailPasswordSubmit: (email: string, password: string) => void;
  handleGitHubSubmit: () => void;
  handleGoogleSubmit: () => void;
  handleFacebookSubmit: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  isLoginMode: true,
  setIsLoginMode: () => {},
  handleEmailPasswordSubmit: () => {},
  handleGitHubSubmit: () => {},
  handleGoogleSubmit: () => {},
  handleFacebookSubmit: () => {},
});

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
