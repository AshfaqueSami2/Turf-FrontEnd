import { useGetAllBookingsQuery } from '../../redux/api/api';

const ViewBookings = () => {
  const { data: bookings, error, isLoading } = useGetAllBookingsQuery(null);

  if (isLoading) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="text-xl font-semibold">Loading...</div>
    </div>;
  }

  if (error) {
    return <div className="flex justify-center items-center min-h-screen text-red-500">
      <div className="text-xl font-semibold">Error: {error.message}</div>
    </div>;
  }

  if (!bookings || bookings.length === 0) {
    return <div className="flex justify-center items-center min-h-screen">
      <div className="text-xl font-semibold">No bookings available.</div>
    </div>;
  }

  return (
    <div style={{marginTop:'80px', marginBottom:'50px'}} className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">All Bookings</h1>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="py-3 px-6">Facility Name</th>
              <th scope="col" className="py-3 px-6">Facility ID</th>
              <th scope="col" className="py-3 px-6">Date</th>
              <th scope="col" className="py-3 px-6">Start Time</th>
              <th scope="col" className="py-3 px-6">End Time</th>
              <th scope="col" className="py-3 px-6">Amount</th>
              <th scope="col" className="py-3 px-6">Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.data.map((booking) => (
              <tr key={booking._id} className="bg-white border-b">
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
                  {booking.facility?.name || 'Unknown Facility'}
                </td>
                <td className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">{booking.facility?._id}</td>
                <td className="py-4 px-6">{booking.date}</td>
                <td className="py-4 px-6">{booking.startTime}</td>
                <td className="py-4 px-6">{booking.endTime}</td>
                <td className="py-4 px-6">${booking.payableAmount}</td>
                <td className="py-4 px-6">{booking.isBooked ? 'Booked' : 'Pending'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewBookings;
