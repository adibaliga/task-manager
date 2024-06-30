import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "@asgardeo/auth-react";
import Auth from "./routes/auth";
import useIsAuthenticated from "./hooks/useAuthenticated";
import LoadingAnimation from "./components/loading";

const RouteValidator: React.FC = () => {
  const { isAuthenticated, isLoading } = useIsAuthenticated();
  if (isLoading) {
    return <LoadingAnimation />;
  }
  if (isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <Auth />;
};

export default RouteValidator;
