// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../../Context/AuthContext";

// const Navbar = () => {
//   const { isAuthenticated, isAdmin, logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate("/");
//   };

//   return (
//     <div>
//       <header className="bg-white shadow-lg">
//         <div className="container mx-auto px-6 py-3 flex items-center justify-between">
//           <div className="uppercase text-gray-800 font-bold text-3xl">
//             Watch.ME
//           </div>
//           <div className="flex items-center">
//             <nav className="hidden lg:flex items-center text-gray-600 uppercase text-lg">
//               <Link to="/" className="py-2 px-6 flex hover:text-purple-600 transition duration-300">
//                 Home
//               </Link>
//               <Link to="/viewFacilities" className="py-2 px-6 flex hover:text-purple-600 transition duration-300">
//                 Facilities
//               </Link>
//               <Link to="aboutUs" className="py-2 px-6 flex hover:text-purple-600 transition duration-300">
//                 About Us
//               </Link>
//               <Link to='contactUs' className="py-2 px-6 flex hover:text-purple-600 transition duration-300">
//                 Contact
//               </Link>
//               {isAuthenticated && (
//                 <Link
//                   to={isAdmin ? "/admin/dashboard" : "/user/dashboard"}
//                   className="py-2 px-6 flex hover:text-purple-600 transition duration-300"
//                 >
//                   Dashboard
//                 </Link>
//               )}
//               {isAuthenticated ? (
//                 <button
//                   onClick={handleLogout}
//                   className="py-2 px-6 flex text-red-600 hover:text-red-800 transition duration-300"
//                 >
//                   Logout
//                 </button>
//               ) : (
//                 <Link to="/login" className="py-2 px-6 flex hover:text-purple-600 transition duration-300">
//                   Login
//                 </Link>
//               )}
//             </nav>
//             <button className="lg:hidden flex flex-col ml-4">
//               <span className="w-6 h-1 bg-gray-800 mb-1"></span>
//               <span className="w-6 h-1 bg-gray-800 mb-1"></span>
//               <span className="w-6 h-1 bg-gray-800 mb-1"></span>
//             </button>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default Navbar;
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import { useState } from "react";

const Navbar = () => {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track mobile menu

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen); // Toggle the menu state
  };

  return (
    <div>
      <nav className="fixed top-0 w-full z-50 bg-white shadow-lg">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            {/* Logo and Brand */}
            <div className="flex items-center">
              <img
                style={{ height: "50px", borderRadius: "5px" }}
                src="https://i.ibb.co/TBr176y/Gemini-Generated-Image-9pcug49pcug49pcu.jpg"
                alt="Logo"
                className="mr-3"
              />
              <Link to="/" className="text-xl font-bold text-gray-800 hover:text-indigo-700 transition-colors duration-300">
                Sam Turf
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex space-x-8">
              <Link
                to="/"
                className="text-gray-600 text-sm lg:text-base font-medium hover:text-indigo-700 transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/viewFacilities"
                className="text-gray-600 text-sm lg:text-base font-medium hover:text-indigo-700 transition duration-300"
              >
                Facilities
              </Link>
              <Link
                to="/aboutUs"
                className="text-gray-600 text-sm lg:text-base font-medium hover:text-indigo-700 transition duration-300"
              >
                About Us
              </Link>
              <Link
                to="/contactUs"
                className="text-gray-600 text-sm lg:text-base font-medium hover:text-indigo-700 transition duration-300"
              >
                Contact
              </Link>
              {isAuthenticated && (
                <Link
                  to={isAdmin ? "/admin/dashboard" : "/user/dashboard"}
                  className="text-gray-600 text-sm lg:text-base font-medium hover:text-indigo-700 transition duration-300"
                >
                  Dashboard
                </Link>
              )}
            </div>

            {/* Authentication Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              {isAuthenticated ? (
                <button
                  onClick={handleLogout}
                  className="text-red-600 text-sm lg:text-base font-medium hover:text-red-800 transition duration-300"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="text-gray-600 text-sm lg:text-base font-medium hover:text-indigo-700 transition duration-300"
                >
                  Login
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="lg:hidden p-2 ml-3 text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-with-text"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden" id="navbar-with-text">
            <ul className="px-4 pt-4 pb-2 space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-gray-600 text-sm font-medium hover:text-indigo-700 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/viewFacilities"
                  className="block text-gray-600 text-sm font-medium hover:text-indigo-700 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Facilities
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutUs"
                  className="block text-gray-600 text-sm font-medium hover:text-indigo-700 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contactUs"
                  className="block text-gray-600 text-sm font-medium hover:text-indigo-700 transition duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
              {isAuthenticated && (
                <li>
                  <Link
                    to={isAdmin ? "/admin/dashboard" : "/user/dashboard"}
                    className="block text-gray-600 text-sm font-medium hover:text-indigo-700 transition duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
              {isAuthenticated ? (
                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left text-red-600 text-sm font-medium hover:text-red-800 transition duration-300"
                  >
                    Logout
                  </button>
                </li>
              ) : (
                <li>
                  <Link
                    to="/login"
                    className="block text-gray-600 text-sm font-medium hover:text-indigo-700 transition duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
