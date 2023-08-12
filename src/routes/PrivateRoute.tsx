import { Navigate, useLocation } from "react-router-dom";
interface PrivateRouteProps {
  children: JSX.Element
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const location = useLocation();

  const logged = localStorage.getItem("user");

  if (!logged) {
    return <Navigate to="/" state={{ path: location.pathname }} />;
  }
  return children;
};

export default PrivateRoute;