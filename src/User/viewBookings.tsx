import React from 'react';
import { useGetUserBookingsQuery } from '../redux/api/api'; // Assuming you have the correct API

const ViewBookingsUser: React.FC = () => {
  const { data, error, isLoading } = useGetUserBookingsQuery(null); // Fetch user's bookings

  // Ensure we access the nested data correctly
  const bookings = data?.data || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Your Bookings</h1>

      {bookings.length > 0 ? (
        <ul className="space-y-4">
          {bookings.map((booking: any) => (
            <li
              key={booking._id} // Use the correct ID from the booking object
              className="p-4 border border-gray-300 rounded-md bg-gray-50"
            >
              {/* Display facility name */}
              <p className="text-lg font-semibold">Facility: {booking.facility?.name || 'No facility name'}</p>
              <p>Date: {new Date(booking.date).toLocaleDateString()}</p>
              <p>Time: {booking.startTime} - {booking.endTime}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No bookings found.</p>
      )}
    </div>
  );
};

export default ViewBookingsUser;
