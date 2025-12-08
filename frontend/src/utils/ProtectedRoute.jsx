import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContextApi } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { adminData, loading } = useContext(AuthContextApi);

  if (loading) {
    return null; 
  }

  if (!adminData) {
    return <Navigate to="/Login" replace />;
  }

  return children;
};

export default ProtectedRoute;
