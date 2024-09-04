import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Navbar = () => {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div>
      <header className="bg-white shadow-lg">
        <div className="container mx-auto px-6 py-3 flex items-center justify-between">
          <div className="uppercase text-gray-800 font-bold text-3xl">
            Watch.ME
          </div>
          <div className="flex items-center">
            <nav className="hidden lg:flex items-center text-gray-600 uppercase text-lg">
              <Link to="/" className="py-2 px-6 flex hover:text-purple-600 transition duration-300">
                Home
              </Link>
              <Link to="/viewFacilities" className="py-2 px-6 flex hover:text-purple-600 transition duration-300">
                Facilities
              </Link>
              
              <a href="#" className="py-2 px-6 flex hover:text-purple-600 transition duration-300">
                Product
              </a>
              <a href="#" className="py-2 px-6 flex hover:text-purple-600 transition duration-300">
                Contact
              </a>
              {isAuthenticated && (
                <Link
                  to={isAdmin ? "/admin/dashboard" : "/user/dashboard"}
                  className="py-2 px-6 flex hover:text-purple-600 transition duration-300"
                >
                  Dashboard
                </Link>
              )}
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="py-2 px-6 flex text-red-600 hover:text-red-800 transition duration-300"
                >
                  Logout
                </button>
              ) : (
                <Link to="/login" className="py-2 px-6 flex hover:text-purple-600 transition duration-300">
                  Login
                </Link>
              )}
            </nav>
            <button className="lg:hidden flex flex-col ml-4">
              <span className="w-6 h-1 bg-gray-800 mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 mb-1"></span>
              <span className="w-6 h-1 bg-gray-800 mb-1"></span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
