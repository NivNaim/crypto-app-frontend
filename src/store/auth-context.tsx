// import React, { createContext, useContext, useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";

import { createContext, useContext } from "react";

// interface AuthContextProps {
//   isLoginMode: boolean;
//   setIsLoginMode: (isLogin: boolean) => void;
//   handleEmailPasswordSubmit: (email: string, password: string) => void;
//   handleGitHubSubmit: () => void;
//   handleGoogleSubmit: () => void;
//   handleFacebookSubmit: () => void;
// }

// const AuthContext = createContext<AuthContextProps>({
//   isLoginMode: true,
//   setIsLoginMode: () => {},
//   handleEmailPasswordSubmit: () => {},
//   handleGitHubSubmit: () => {},
//   handleGoogleSubmit: () => {},
//   handleFacebookSubmit: () => {},
// });

// export const useAuth = () => useContext(AuthContext);

// const AuthProvider: React.FC = ({ children }) => {
//   const initialDarkMode = localStorage.getItem("isDarkMode") === "true";
//   const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);
//   const [isLoginMode, setIsLoginMode] = useState<boolean>(true);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsLoginMode(location.pathname === "/auth/login");
//   }, [location]);

//   const handleEmailPasswordSubmit = async (email: string, password: string) => {
//     const data = {
//       email: email,
//       password: password,
//     };
//     try {
//       if (isLoginMode) {
//         const response = await axios.post(
//           "http://localhost:3000/auth/login",
//           data
//         );
//         console.log("login successful!", response.data);

//         navigate("/");
//       } else {
//         const response = await axios.post(
//           "http://localhost:3000/auth/sign-up",
//           data
//         );
//         console.log("sign-up successful!", response.data);

//         navigate("/auth/login");
//       }
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleGitHubSubmit = async () => {
//     try {
//       window.open("http://localhost:3000/github", "_self");
//     } catch (err) {
//       console.error("GitHub Sign-in failed!", err);
//     }
//   };

//   const handleGoogleSubmit = async () => {
//     // Todo: login with Google
//   };

//   const handleFacebookSubmit = async () => {
//     // Todo: login with Facebook
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoginMode,
//         setIsLoginMode,
//         handleEmailPasswordSubmit,
//         handleGitHubSubmit,
//         handleGoogleSubmit,
//         handleFacebookSubmit,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthProvider;

// AuthContext.tsx
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
