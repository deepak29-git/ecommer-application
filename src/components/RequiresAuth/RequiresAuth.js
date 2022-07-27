import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";

export const RequiresAuth = ({ children }) => {
  const { auth } = useAuth();

  return auth ? children : <Navigate to="/login" replace />;
};
