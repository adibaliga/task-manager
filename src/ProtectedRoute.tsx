import { Navigate, Outlet } from "react-router-dom";
import useIsAuthenticated from "./hooks/useAuthenticated";
import LoadingAnimation from "./components/loading";

const ProtectedRoute: React.FC = () => {
  const { isAuthenticated, isLoading } = useIsAuthenticated();

  if (isLoading) {
    return <LoadingAnimation />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
