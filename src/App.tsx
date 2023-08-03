import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Layout/Header";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme, lightTheme } from "./components/UI/Theme";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import AuthProvider from "./store/AuthProvider";
import Home from "./components/Layout/Home/Home";
import CryptoDataUpdater from "./components/CryptoDataUpdater";

const App = () => {
  const initialDarkMode = localStorage.getItem("isDarkMode") === "true";
  const [isDarkMode, setIsDarkMode] = useState(initialDarkMode);

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/sign-up" element={<Login />} />
        </Routes>
      </AuthProvider>
      <CryptoDataUpdater />
    </ThemeProvider>
  );
};

export default App;
