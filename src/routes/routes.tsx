



import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import AdminDashboard from "../components/Admin/AdminDashBoard";
import UserDashboard from "../User/UserDashBoard";
import PrivateRoute from "../components/privateRoute/privateRoute";
import CreateFacility from "../components/Admin/CreateFacility";
import UpdateFacility from "../components/Admin/UpdateFacility";
import ViewFacilities from "../components/Admin/ViewFacilities";
import ViewBookings from "../components/Admin/ViewBookings";
import CreateAdmin from "../components/Admin/CreateAdmin";
import SignUp from "../components/pages/SignUp";
import FacilityListing from "../components/pages/FacilityListing";
import FacilityDetails from "../components/pages/FacilityDetails";
import BookNow from "../components/pages/BookNow";
import ViewBookingsUser from "../User/viewBookings";
import AboutUs from "../components/pages/AboutUs";
import ContactUs from "../components/pages/ContactUs";
import NotFoundRoute from "../components/pages/NotFoundRoute";
import Unauthorized from "../components/pages/UnAuthorized";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/aboutUs", element: <AboutUs /> },
      { path: "/contactUs", element: <ContactUs /> },
      { path: "/signUp", element: <SignUp /> },
      { path: "/viewFacilities", element: <FacilityListing /> },
      { path: "/viewFacilities/:id", element: <FacilityDetails /> },
      {
        path: "/book/:id",
        element: (
          <PrivateRoute role="user">
            <BookNow />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/dashboard",
        element: (
          <PrivateRoute role="admin">
            <AdminDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/createFacility",
        element: (
          <PrivateRoute role="admin">
            <CreateFacility />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/update-facility/:id",
        element: (
          <PrivateRoute role="admin">
            <UpdateFacility />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/viewFacilities",
        element: (
          <PrivateRoute role="admin">
            <ViewFacilities />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/viewBookings",
        element: (
          <PrivateRoute role="admin">
            <ViewBookings />
          </PrivateRoute>
        ),
      },
      {
        path: "/admin/createAdmin",
        element: (
          <PrivateRoute role="admin">
            <CreateAdmin />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/dashboard",
        element: (
          <PrivateRoute role="user">
            <UserDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/user/viewBookings",
        element: (
          <PrivateRoute role="user">
            <ViewBookingsUser />
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFoundRoute />,
      },
      {
        path: "/unauthorized",
        element: <Unauthorized />,
      },
    ],
  },
]);

export default router;
