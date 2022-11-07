import { Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, error } = useAuth0();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error) {
    return <h1>error</h1>;
  }
  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }

  return children;
};

export const UnauthenticatedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, error } = useAuth0();
  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (error) {
    return <h1>error</h1>;
  }
  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  return children;
};

export const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }
  return children;
};
