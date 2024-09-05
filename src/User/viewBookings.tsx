import React from 'react';
import { useGetUserBookingsQuery, useDeleteBookingMutation } from '../redux/api/api';
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ViewBookingsUser: React.FC = () => {
  const { data, error, isLoading, refetch } = useGetUserBookingsQuery(null);
  const [deleteBooking] = useDeleteBookingMutation();

  const bookings = data?.data || [];

  if (error) {
    toast.error("Error loading bookings.");
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <TailSpin height="80" width="80" color="#4A90E2" ariaLabel="loading" />
      </div>
    );
  }

  const handleCancelBooking = async (bookingId: string) => {
    try {
      await deleteBooking(bookingId).unwrap();
      toast.success('Booking cancelled successfully!');
      refetch();
    } catch (error) {
      toast.error('Failed to cancel booking. Please try again.');
    }
  };

  return (
    <div style={{marginTop:'85px'}} className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto">
        <ToastContainer />

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">View Bookings</h1>

        {/* Bookings Count */}
        <div className="flex justify-between items-center bg-white p-4 rounded-lg shadow-lg mb-6">
          <span className="text-xl font-semibold text-gray-700">
            {bookings.length > 0 ? (
              <>
                <span className="text-green-600">{bookings.length}</span> Booking{bookings.length > 1 ? 's' : ''} Found
              </>
            ) : (
              <span className="text-red-500">No bookings found</span>
            )}
          </span>
        </div>

        {/* Display Bookings */}
        {bookings.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bookings.map((booking: any) => (
              <div
                key={booking._id}
                className="relative flex flex-col bg-white shadow-lg rounded-lg p-6 transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-56 overflow-hidden rounded-lg shadow-md mb-4">
                  <img
                    src={booking.facility?.image || 'https://via.placeholder.com/150'}
                    alt={booking.facility?.name || 'No facility image'}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h5 className="text-xl font-semibold text-gray-800 mb-2">
                    Facility: {booking.facility?.name || 'No facility name'}
                  </h5>
                  <p className="text-sm text-gray-600 mb-1">Date: {new Date(booking.date).toLocaleDateString()}</p>
                  <p className="text-sm text-gray-600 mb-3">Time: {booking.startTime} - {booking.endTime}</p>
                  <span className="block text-lg font-bold text-gray-900 mb-4">Amount Paid: ${booking.payableAmount}</span>
                </div>
                {/* Cancel Booking Button */}
                <button
                  onClick={() => handleCancelBooking(booking._id)}
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-lg shadow hover:bg-red-700 transition duration-300"
                >
                  Cancel Booking
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600 text-lg">You don't have any bookings yet.</div>
        )}
      </div>
    </div>
  );
};

export default ViewBookingsUser;
