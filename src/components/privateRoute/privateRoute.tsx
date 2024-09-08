// import { Navigate } from "react-router-dom";
// import { useAuth } from "../../Context/AuthContext";

// const PrivateRoute = ({ children, role }: { children: JSX.Element; role?: string }) => {
//   const { isAuthenticated, isAdmin } = useAuth();

//   if (!isAuthenticated) {
//     return <Navigate to="/login" />;
//   }

  
//   if (role === 'admin' && !isAdmin) {
//     return <Navigate to="/" />;
//   }

//   if (role === 'user' && isAdmin) {
//     return <Navigate to="/admin/dashboard" />;
//   }

//   if (role === 'admin') {
//     return <Navigate to="/admin/dashboard" />;
//   } else if (role === 'user') {
//     return <Navigate to="/user/dashboard" />;
//   }



//   console.log('Authenticated:', isAuthenticated);
//   console.log('Target Role:', role);

//   return children;
// };

// export default PrivateRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

interface PrivateRouteProps {
  children: JSX.Element;
  role?: string;
}

const PrivateRoute = ({ children, role }: PrivateRouteProps) => {
  const { isAuthenticated, isAdmin } = useAuth(); // Use your auth logic

  // If the user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If the route requires admin access but the user is not an admin
  if (role === "admin" && !isAdmin) {
    return <Navigate to="/unauthorized" />;
  }

  // If the route requires user access but the user is an admin
  if (role === "user" && isAdmin) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default PrivateRoute;
