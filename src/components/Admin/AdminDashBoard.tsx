// import { useGetProfileQuery } from "../../redux/api/api";

// const AdminDashboard = () => {
//   const { data: user, error, isLoading } = useGetProfileQuery(null);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   const userName = user?.data?.name;

//   return (
//     <div className="flex min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-purple-600 text-white flex flex-col">
//         <div className="flex items-center justify-center mt-10">
//           <div className="text-4xl">
//             <i className="fas fa-graduation-cap"></i>
//           </div>
//         </div>
//         <nav className="mt-10">
//           <a
//             href="/admin/createFacility"
//             className="flex items-center p-2.5 text-lg font-semibold hover:bg-purple-700"
//           >
//             <i className="fas fa-credit-card"></i>
//             <span className="ml-4">Create Facility</span>
//           </a>
//           <a
//             href="/admin/viewFacilities"
//             className="flex items-center p-2.5 text-lg font-semibold hover:bg-purple-700"
//           >
//             <i className="fas fa-building"></i>
//             <span className="ml-4">Manage All Facilities</span>
//           </a>
//           <a
//             href="/admin/viewBookings"
//             className="flex items-center p-2.5 text-lg font-semibold hover:bg-purple-700"
//           >
//             <i className="fas fa-calendar-alt"></i>
//             <span className="ml-4">View All Bookings</span>
//           </a>
//           <a
//             href="/admin/createAdmin"  // Add this link for creating a new admin
//             className="flex items-center p-2.5 text-lg font-semibold hover:bg-purple-700"
//           >
//             <i className="fas fa-user-plus"></i>
//             <span className="ml-4">Create Admin</span>
//           </a>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="flex justify-between items-center p-6 bg-white shadow">
//           <div className="flex-1">
//             <input
//               type="text"
//               placeholder="Search"
//               className="p-2 w-full max-w-xs bg-gray-200 rounded-md"
//             />
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="text-right">
//               <p className="text-gray-800 font-semibold">Welcome, {userName || "Admin"}!</p>
//               <p className="text-gray-500 text-sm">{user?.data?.role}</p>
//             </div>
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Profile Picture"
//               className="rounded-full w-10 h-10 border-2 border-purple-600"
//             />
//           </div>
//         </header>

//         {/* Welcome Section */}
//         <main className="p-6 bg-purple-500 text-white flex justify-between items-center rounded-lg mt-4 mx-4">
//           <div>
//             <p className="text-sm">{new Date().toLocaleDateString()}</p>
//             <h1 className="text-3xl font-bold mt-2">Welcome back, {userName || "Admin"}!</h1>
//             <p className="mt-2">Always stay updated in your admin portal</p>
//           </div>
//           <div>
//             <img
//               src="https://via.placeholder.com/120"
//               alt="Illustration"
//               className="w-32 h-32"
//             />
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import React from "react";
import { useGetProfileQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  const { data: user, error, isLoading } = useGetProfileQuery(null);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const userName = user?.data?.name;

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-600 text-white flex flex-col">
        <div className="flex items-center justify-center h-20 border-b border-purple-500">
          <div className="text-3xl font-bold text-green-400">Admin Panel</div>
        </div>
        <nav className="mt-10 flex-1">
          <Link
            to="/admin/createFacility"
            className="flex items-center px-6 py-3 ml-4 hover:bg-purple-700 hover:text-green-400 transition duration-200"
          >
            <i className="fas fa-credit-card"></i>
            <span className="ml-4">Create Facility</span>
          </Link>
          <Link
            to="/admin/viewFacilities"
            className="flex items-center px-6 py-3 hover:bg-purple-700 hover:text-green-400 transition duration-200"
          >
            <i className="fas fa-building"></i>
            <span className="ml-4">Manage All Facilities</span>
          </Link>
          <Link
            to="/admin/viewBookings"
            className="flex items-center px-6 py-3 hover:bg-purple-700 hover:text-green-400 transition duration-200"
          >
            <i className="fas fa-calendar-alt"></i>
            <span className="ml-4">View All Bookings</span>
          </Link>
          <Link
            to="/admin/createAdmin"
            className="flex items-center px-6 py-3 hover:bg-purple-700 hover:text-green-400 transition duration-200"
          >
            <i className="fas fa-user-plus"></i>
            <span className="ml-4">Create Admin</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
          <div className="text-lg font-semibold text-gray-800">
            Welcome, {userName || "Admin"}
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-gray-800 font-semibold">{userName}</p>
              <p className="text-gray-500 text-sm">{user?.data?.role}</p>
            </div>
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="rounded-full border-2 border-green-400"
            />
          </div>
        </header>

        {/* Welcome Section */}
        <main className="p-6 flex-1 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            {/* Similar Welcome Section as UserDashboard */}
            <div className="bg-purple-500 text-white p-6 rounded-lg flex justify-between items-center shadow-lg mb-6">
              <div>
                <p className="text-sm">{new Date().toLocaleDateString()}</p>
                <h1 className="text-3xl font-bold">Welcome back, {userName || "Admin"}!</h1>
                <p className="mt-2">Stay updated with your admin tasks.</p>
              </div>
              <img
                src="https://via.placeholder.com/120"
                alt="Illustration"
                className="w-32 h-32"
              />
            </div>

            {/* Search Input */}
            <div className="mb-6">
              <input
                type="text"
                placeholder="Search"
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Admin Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 flex items-center justify-center rounded-full mb-4">
                  <i className="fas fa-credit-card text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Create Facility
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 flex items-center justify-center rounded-full mb-4">
                  <i className="fas fa-building text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  Manage Facilities
                </h3>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-gray-900 flex items-center justify-center rounded-full mb-4">
                  <i className="fas fa-calendar-alt text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-700">
                  View Bookings
                </h3>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
