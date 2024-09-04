import React from "react";
import { Link } from "react-router-dom";
import { useGetProfileQuery } from "../redux/api/api";

const UserDashboard: React.FC = () => {
  const { data: user, error, isLoading } = useGetProfileQuery(null);

  const userName = user?.data?.name;
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="flex items-center justify-center h-20 border-b border-gray-800">
          <div className="text-3xl font-bold text-green-400">Q.</div>
        </div>
        <nav className="mt-10 flex-1">
          <Link
            to="/"
            className="flex items-center px-6 py-3 ml-4 hover:bg-gray-800 hover:text-green-400 transition duration-200"
          >
          Home
          </Link>
          <Link
            to="/connections"
            className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
          >
            <span className="ml-4">Connections</span>
          </Link>
          <Link
            to="/personas"
            className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
          >
    
            <span className="ml-4">Personas</span>
          </Link>
          <Link
            to="/settings"
            className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
          >
            <span className="ml-4">Settings</span>
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
              <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 flex items-center justify-center rounded-full mb-4">
                  <span className="material-icons-outlined text-white">
                    gavel
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Legal Services
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 flex items-center justify-center rounded-full mb-4">
                  <span className="material-icons-outlined text-white">
                    business
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Marketing Services
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 flex items-center justify-center rounded-full mb-4">
                  <span className="material-icons-outlined text-white">
                    book
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Advisory Services
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 flex items-center justify-center rounded-full mb-4">
                  <span className="material-icons-outlined text-white">
                    build
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Technical Services
                </h3>
              </div>
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
