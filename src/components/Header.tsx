import "./Header.scss";
import MUISwitch from "./UI/mui-switch/MUISwitch";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

interface HeaderProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <div className="header">
      <div>
        <CurrencyExchangeIcon className="currency-exchange-icon" />
        <div className="routes">
          <a
            href="/welcome"
            className={isDarkMode ? "dark-mode-link" : "light-mode-link"}
          >
            Home
          </a>
          <a
            href="/auth/sign-in"
            className={isDarkMode ? "dark-mode-link" : "light-mode-link"}
          >
            SignIn
          </a>
        </div>
      </div>
      <MUISwitch checked={isDarkMode} onChange={toggleDarkMode} />
    </div>
  );
};

export default Header;
