import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import AdminDashboard from "../components/Admin/AdminDashBoard";
import UserDashboard from "../User/UserDashBoard"; // Add this import
import PrivateRoute from "../components/privateRoute/privateRoute";
import CreateFacility from "../components/Admin/CreateFacility";
import UpdateFacility from "../components/Admin/UpdateFacility";
import ViewFacilities from "../components/Admin/ViewFacilities";
import ViewBookings from "../components/Admin/ViewBookings"; // Import ViewBookings component
import CreateAdmin from "../components/Admin/CreateAdmin";
import SignUp from "../components/pages/SignUp";
import FacilityListing from "../components/pages/FacilityListing";
import FacilityDetails from "../components/pages/FacilityDetails";
import BookNow from "../components/pages/BookNow"; // Import BookNow component

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/viewFacilities",
        element: <FacilityListing />,
      },
      {
        path: "/viewFacilities/:id",
        element: <FacilityDetails />,
      },
      {
        path: "/book/:id", // New route for booking a facility
        element: (
          <PrivateRoute>
            <BookNow />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/createFacility",
        element: (
          <PrivateRoute>
            <CreateFacility />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/update-facility/:id", // Add this route for updating a facility
        element: (
          <PrivateRoute>
            <UpdateFacility />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/viewFacilities",
        element: (
          <PrivateRoute>
            <ViewFacilities />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/viewFacility",
        element: (
          <PrivateRoute>
            <ViewFacilities />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/viewBookings", // New route for viewing bookings
        element: (
          <PrivateRoute>
            <ViewBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/createAdmin", // Add route for CreateAdmin
        element: (
          <PrivateRoute>
            <CreateAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/dashboard",
        element: (
          <PrivateRoute>
            <UserDashboard />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
