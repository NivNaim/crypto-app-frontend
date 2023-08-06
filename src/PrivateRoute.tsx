import { Route, Navigate } from "react-router-dom";
import { useAuth } from "./store/auth-context";
import { getCookie } from "./utils/cookieUtils";
import React from "react";

interface PrivateRouteProps {
    path: string;
    element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, ...rest }) => {
    const { isAuthenticated } = useAuth();
  
    if (!isAuthenticated) {
      const token = getCookie("your_cookie_name_here"); // Replace with the name of your authentication token cookie
  
      if (token) {
        // Perform any additional token validation here if needed
        // For example, you can make an API call to validate the token on the server-side
        // If the token is valid, set the isAuthenticated state to true in the AuthProvider
      } else {
        // No token found, redirect to the login page
        return <Navigate to="/auth/login" />;
      }
    }
    return <Route {...rest} element={element} />;
  };
  
  export default PrivateRoute;
