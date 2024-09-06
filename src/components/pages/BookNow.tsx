import { useState } from 'react';
import { useLazyCheckAvailabilityQuery, useCreateBookingMutation } from '../../redux/api/api';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookNow = () => {
  const { id: facilityId } = useParams();
  const [triggerCheckAvailability, { data, error }] = useLazyCheckAvailabilityQuery();
  const [createBooking, { isLoading: isBookingLoading }] = useCreateBookingMutation();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<{ startTime: string; endTime: string } | null>(null); // Track the selected slot

  const handleCheckAvailability = () => {
    if (selectedDate) {
      triggerCheckAvailability({ date: selectedDate, facility: facilityId }).then((response) => {
        console.log('Available Slots:', response.data);
      });
    }
  };

  const handleSlotClick = (slot: { startTime: string, endTime: string }) => {
    setStartTime(slot.startTime);
    setEndTime(slot.endTime);
    setSelectedSlot(slot); // Set the selected slot
  };

  const handleBookNow = async () => {
    if (!startTime || !endTime || !selectedDate) {
      toast.error('Please select a valid slot and date!');
      return;
    }

    const bookingData = {
      facility: facilityId,
      date: selectedDate,
      startTime,
      endTime,
    };

    try {
      await createBooking(bookingData).unwrap();
      toast.success('Booking confirmed!');
    } catch (error) {
      console.error(error);
      toast.error('Failed to confirm booking. Please try again.');
    }
  };

  return (
    <div style={{ marginTop: '117px', marginBottom: '117px' }} className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <ToastContainer />
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Book a Facility</h1>

      {/* Date Picker */}
      <div className="mb-6">
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Select Date</label>
        <input
          type="date"
          id="date"
          className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>

      {/* Check Availability Button */}
      <button
        onClick={handleCheckAvailability}
        className="mb-6 w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-200"
      >
        Check Availability
      </button>

      {/* Availability Display */}
      {error && <div className="text-red-500 mb-6">Error: {error.message}</div>}
      {data?.availableSlots && data.availableSlots.length > 0 ? (
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-800 mb-2">Available Slots:</h2>
          <ul className="space-y-2">
            {data.availableSlots.map((slot: { startTime: string; endTime: string }) => (
              <li
                key={slot.startTime}
                className={`text-gray-700 border border-gray-300 rounded-lg p-2 bg-gray-50 cursor-pointer hover:bg-indigo-100 
                  ${selectedSlot?.startTime === slot.startTime && selectedSlot?.endTime === slot.endTime ? 'bg-green-100 border-green-400' : ''}`}
                onClick={() => handleSlotClick(slot)}
              >
                {slot.startTime} - {slot.endTime}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="text-gray-500 mb-6">No available slots for the selected date.</div>
      )}

      {/* Booking Form - Start Time and End Time fields */}
      <div className="mb-4">
        <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">Start Time</label>
        <input
          type="time"
          id="startTime"
          className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={startTime}
          readOnly
        />
      </div>
      <div className="mb-6">
        <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">End Time</label>
        <input
          type="time"
          id="endTime"
          className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={endTime}
          readOnly
        />
      </div>

      {/* Book Now Button */}
      <button
        onClick={handleBookNow}
        className={`w-full py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition duration-200 
          ${!startTime || !endTime || isBookingLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={!startTime || !endTime || isBookingLoading}
      >
        Proceed With Payment
      </button>
    </div>
  );
};

export default BookNow;
