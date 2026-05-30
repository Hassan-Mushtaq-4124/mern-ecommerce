import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const { userInfo } = useSelector((state) => state.auth);

  if (!userInfo) {
    return <Navigate to="/login" />;
  }

  if (role && userInfo.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;