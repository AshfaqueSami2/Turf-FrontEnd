import React from "react";
import { Link } from "react-router-dom";
import { useGetProfileQuery } from "../redux/api/api";

const UserDashboard: React.FC = () => {
  const { data: user } = useGetProfileQuery(null);

  const userName = user?.data?.name;
  return (
    <div style={{marginTop:'85px'}} className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="flex items-center justify-center h-20 border-b border-gray-800">
          <div className="text-3xl font-bold text-green-400">User Panel</div>
        </div>
        <nav className="mt-10 flex-1">
          <Link
            to="/"
            className="flex items-center px-6 py-3 ml-4 hover:bg-gray-800 hover:text-green-400 transition duration-200"
          >
          Home
          </Link>
          <Link
            to="/user/viewBookings"
            className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
          >
            <span className="ml-4">View Bookings</span>
          </Link>
          <Link
            to="/aboutUs"
            className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
          >
            <span className="ml-4">About Us</span>
          </Link>
          <Link
            to="/contactUs"
            className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
          >
            <span className="ml-4">Contact Us</span>
          </Link>
          
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold text-gray-800">
          Welcome  {userName}
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-gray-800 font-semibold">{userName}</p>
              <p className="text-gray-500 text-sm">@s4daiy</p>
            </div>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full border-2 border-green-400"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-2xl font-bold text-gray-800 mb-4">
              What do you need help with?
            </div>
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div className="text-lg font-semibold text-gray-600 mb-4">
              Please select a category
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link to='/' className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                <img style={{height:'50px',marginBottom:'15px'}} src="https://i.ibb.co/HKn2r42/square-14034325.png" alt="" />
                <h3 className="text-xl font-semibold text-gray-700">
                 Home
                </h3>
              </Link>
              <Link to='/user/viewBookings' className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                <img style={{height:'50px',marginBottom:'15px'}} src="https://i.ibb.co/T4tpXZK/booking-online-6030216.png" alt="" />
                <h3  className="text-xl text-center font-semibold text-gray-700">
                 View Bookings
                </h3>
              </Link>
              <Link to='/aboutUs' className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                <img style={{height:'50px',marginBottom:'15px'}} src="https://i.ibb.co/HzYpX0N/group-921347.png" alt="" />
                <h3 className="text-xl text-center font-semibold text-gray-700">
                  About Us
                </h3>
              </Link>
              <Link to='/contactUs' className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                <img  style={{height:'50px',marginBottom:'15px'}} src="https://i.ibb.co/GQVSRw2/address-book-8661123.png" alt="" />
                <h3 className="text-xl text-center font-semibold text-gray-700">
                 Contact Us
                </h3>
              </Link>
            </div>
          </div>
          <div className="flex justify-end mt-6">
            <button className="px-6 py-3 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition-colors duration-200">
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
