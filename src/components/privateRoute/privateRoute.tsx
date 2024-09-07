

import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const PrivateRoute = ({ children, role }: { children: JSX.Element; role?: string }) => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  
  if (role === 'admin' && !isAdmin) {
    return <Navigate to="/" />;
  }

  if (role === 'user' && isAdmin) {
    return <Navigate to="/admin/dashboard" />;
  }

  if (role === 'admin') {
    return <Navigate to="/admin/dashboard" />;
  } else if (role === 'user') {
    return <Navigate to="/user/dashboard" />;
  }

  console.log('Authenticated:', isAuthenticated);
  console.log('Target Role:', role);

  return children;
};

export default PrivateRoute;

