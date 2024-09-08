


// import React from "react";
// import { useGetProfileQuery } from "../../redux/api/api";
// import { Link } from "react-router-dom";

// const AdminDashboard: React.FC = () => {
//   const { data: user, error, isLoading } = useGetProfileQuery(null);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     // Use a type guard to safely check for error message
//     const errorMessage =
//       "data" in error && error.data && typeof error.data === "object" && "message" in error.data
//         ? (error.data as any).message
//         : "An error occurred";

//     return <div>Error: {errorMessage}</div>;
//   }

//   const userName = user?.data?.name;

//   return (
//     <div style={{marginTop:'85px'}} className="min-h-screen bg-gray-100 flex">
//       {/* Sidebar */}
//       <aside className="w-64 bg-gray-900 text-white flex flex-col">
//       <div className="flex items-center justify-center h-20 border-b border-gray-800">
//           <div className="text-3xl font-bold text-green-400">Admin Panel</div>
//         </div>
//         <nav className="mt-10 flex-1">
//           <Link
//             to="/admin/createFacility"
//             className="flex items-center px-6 py-3 ml-4 hover:bg-gray-800 hover:text-green-400 transition duration-200"
//           >
//             <span className="ml-4">Create Facility</span>
//           </Link>
//           <Link
//             to="/admin/viewFacilities"
//             className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
//           >
//             <i className="fas fa-building"></i>
//             <span className="ml-4">Manage All Facilities</span>
//           </Link>
//           <Link
//             to="/admin/viewBookings"
//             className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
//           >
//             <i className="fas fa-calendar-alt"></i>
//             <span className="ml-4">View All Bookings</span>
//           </Link>
//           <Link
//             to="/admin/createAdmin"
//             className="flex items-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
//           >
//             <i className="fas fa-user-plus"></i>
//             <span className="ml-4">Create Admin</span>
//           </Link>
//         </nav>
//       </aside>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col">
//         {/* Header */}
//         <header className="bg-white shadow-md flex items-center justify-between px-6 py-4">
//           <div className="text-lg font-semibold text-gray-800">
//             Welcome, {userName || "Admin"}
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="text-right">
//               <p className="text-gray-800 font-semibold">{userName}</p>
//               <p className="text-gray-500 text-sm">{user?.data?.role}</p>
//             </div>
//             <img
//               src="https://via.placeholder.com/40"
//               alt="Profile"
//               className="rounded-full border-2 border-green-400"
//             />
//           </div>
//         </header>

//         {/* Main Content */}
//         <main className="flex-1 bg-gray-100 p-6">
//           <div className="max-w-4xl mx-auto">
//             {/* Welcome Section */}
//             <div className="text-2xl font-bold text-gray-800 mb-4">
//               What do you need help with?
//             </div>

//             {/* Search Input */}
//             <div className="mb-6">
//               <input
//                 type="text"
//                 placeholder="Search"
//                 className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
//               />
//             </div>

//             <div className="text-lg font-semibold text-gray-600 mb-4">
//               Please select an admin action
//             </div>

//             {/* Admin Action Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               <Link
//                 to="/admin/createFacility"
//                 className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <img style={{height:'50px'}} src="https://i.ibb.co/9HBH4GM/settings-17328541.png" alt="" />
//                 <h3 className="text-xl font-semibold text-gray-700">
//                   Create Facility
//                 </h3>
//               </Link>
//               <Link
//                 to="/admin/viewFacilities"
//                 className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <img style={{height:'50px'}} src="https://i.ibb.co/23wSZKk/settings-15821667.png" alt="" />
//                 <h3 className="text-xl font-semibold text-gray-700">
//                   Manage Facilities
//                 </h3>
//               </Link>
//               <Link
//                 to="/admin/viewBookings"
//                 className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
//               >
//                 <img style={{height:'50px'}}  src="https://i.ibb.co/T4tpXZK/booking-online-6030216.png" alt="" />
//                 <h3 className="text-xl font-semibold text-gray-700">
//                   View Bookings
//                 </h3>
//               </Link>
//               <Link
//                 to="/admin/createAdmin"
//                 className="flex flex-col items-center justify-center p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
//               > 
//                <img style={{height:'50px'}} src="https://i.ibb.co/FJ2cxLQ/vampire-3530911.png" alt="" />
//                 <h3 className="text-xl font-semibold text-gray-700">
//                   Create Admin
//                 </h3>
//               </Link>
//             </div>

//             {/* Footer Button */}
//             <div className="flex justify-end mt-6">
//               <Link
//                 to="/admin/viewReports"
//                 className="px-6 py-3 bg-green-500 text-white rounded-md shadow hover:bg-green-600 transition-colors duration-200"
//               >
//                 Next
//               </Link>
//             </div>
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
    // Use a type guard to safely check for error message
    const errorMessage =
      "data" in error && error.data && typeof error.data === "object" && "message" in error.data
        ? (error.data as any).message
        : "An error occurred";

    return <div>Error: {errorMessage}</div>;
  }

  const userName = user?.data?.name;

  return (
    <div style={{ marginTop: '85px' }} className="min-h-screen bg-gray-100 flex flex-col lg:flex-row">
      {/* Sidebar (Hidden on smaller screens) */}
      <aside className="hidden lg:flex w-64 bg-gray-900 text-white flex-col">
  <div className="flex items-center justify-center h-20 border-b border-gray-800">
    <div className="text-3xl font-bold text-green-400">Admin Panel</div>
  </div>
  <nav className="mt-10 flex-1">
    <Link
      to="/admin/createFacility"
      className="flex items-center justify-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
    >
      <span className="ml-4">Create Facility</span>
    </Link>
    <Link
      to="/admin/viewFacilities"
      className="flex items-center justify-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
    >
      <i className="fas fa-building"></i>
      <span className="ml-4">Manage All Facilities</span>
    </Link>
    <Link
      to="/admin/viewBookings"
      className="flex items-center justify-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
    >
      <i className="fas fa-calendar-alt"></i>
      <span className="ml-4">View All Bookings</span>
    </Link>
    <Link
      to="/admin/createAdmin"
      className="flex items-center justify-center px-6 py-3 hover:bg-gray-800 hover:text-green-400 transition duration-200"
    >
      <i className="fas fa-user-plus"></i>
      <span className="ml-4">Create Admin</span>
    </Link>
  </nav>
</aside>


      {/* Main Content Area */}
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

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-6">
          <div className="max-w-4xl mx-auto">
            {/* Admin Panel Heading for Mobile */}
            <h1 className="text-3xl font-bold text-center mb-6 lg:hidden">Admin Panel</h1>

            <div className="text-lg font-semibold text-gray-600 mb-4 text-center">
              Please select an admin action
            </div>

            {/* Admin Action Cards */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6 lg:grid-cols-4">
  <Link
    to="/admin/createFacility"
    className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
  >
    <img
      className="h-10 sm:h-12" // Tailwind classes for responsive height
      src="https://i.ibb.co/9HBH4GM/settings-17328541.png"
      alt="Create Facility"
    />
    <h3 className="text-sm sm:text-xl font-semibold text-gray-700 text-center">
      Create Facility
    </h3>
  </Link>
  <Link
    to="/admin/viewFacilities"
    className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
  >
    <img
      className="h-10 sm:h-12" // Tailwind classes for responsive height
      src="https://i.ibb.co/23wSZKk/settings-15821667.png"
      alt="Manage Facilities"
    />
    <h3 className="text-sm sm:text-xl font-semibold text-gray-700 text-center">
      Manage Facilities
    </h3>
  </Link>
  <Link
    to="/admin/viewBookings"
    className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
  >
    <img
      className="h-10 sm:h-12" // Tailwind classes for responsive height
      src="https://i.ibb.co/T4tpXZK/booking-online-6030216.png"
      alt="View Bookings"
    />
    <h3 className="text-sm sm:text-xl font-semibold text-gray-700 text-center">
      View Bookings
    </h3>
  </Link>
  <Link
    to="/admin/createAdmin"
    className="flex flex-col items-center justify-center p-4 sm:p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
  >
    <img
      className="h-10 sm:h-12" // Tailwind classes for responsive height
      src="https://i.ibb.co/FJ2cxLQ/vampire-3530911.png"
      alt="Create Admin"
    />
    <h3 className="text-sm sm:text-xl font-semibold text-gray-700 text-center">
      Create Admin
    </h3>
  </Link>
</div>
            <div className="flex justify-end mt-6">
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
