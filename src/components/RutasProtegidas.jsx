import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RutasProtegidas({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default RutasProtegidas;