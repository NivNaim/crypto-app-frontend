import { Link, useLocation } from "react-router-dom";
import classes from "./Header.module.scss";
import MUISwitch from "../UI/MUISwitch";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  const location = useLocation();

  return (
    <div className={classes.header}>
      <div>
        <CurrencyExchangeIcon className={classes["currency-exchange-icon"]} />
        <div className={classes.routes}>
          <Link
            to="/"
            className={`${location.pathname === "/" ? classes.active : null} ${
              classes[isDarkMode ? "dark-mode-link" : "light-mode-link"]
            }`}
          >
            Home
          </Link>
          <Link
            to="/auth/login"
            className={`${
              location.pathname === "/auth/login" ? classes.active : null
            } ${classes[isDarkMode ? "dark-mode-link" : "light-mode-link"]}`}
          >
            Login
          </Link>
          <Link
            to="/auth/sign-up"
            className={`${
              location.pathname === "/auth/sign-up" ? classes.active : null
            } ${classes[isDarkMode ? "dark-mode-link" : "light-mode-link"]}`}
          >
            SignUp
          </Link>
        </div>
      </div>
      <MUISwitch checked={isDarkMode} onChange={toggleDarkMode} />
    </div>
  );
};

export default Header;
