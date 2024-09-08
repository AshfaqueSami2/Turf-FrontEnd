import { Navigate } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext'; // Assuming you have an AuthContext

const AdminRoute = ({ children, role }: { children: JSX.Element; role?: string }) => {
  const { isAuthenticated, isAdmin } = useAuth();

  if (!isAuthenticated) {
    // If the user is not logged in, redirect to login page
    return <Navigate to="/login" replace />;
  }

  if(role === 'user'){
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    // If the user is logged in but not an admin, redirect to unauthorized page
    return <Navigate to="/unauthorized" replace />;
  }

  // If the user is authenticated and an admin, render the children components (admin pages)
  return children;
};

export default AdminRoute;
