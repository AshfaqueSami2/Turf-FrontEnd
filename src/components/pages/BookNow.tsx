import React, { useState } from 'react';
import { useLazyCheckAvailabilityQuery } from '../../redux/api/api';
import { useParams } from 'react-router-dom';

const BookNow = () => {
  const { id: facilityId } = useParams(); // Extract facility ID from the route parameters
  const [triggerCheckAvailability, { data, error }] = useLazyCheckAvailabilityQuery();
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedSlot, setSelectedSlot] = useState<any>(null); // State to track the selected time slot

  const handleCheckAvailability = () => {
    if (selectedDate) {
      triggerCheckAvailability({ date: selectedDate, facility: facilityId }).then((response) => {
        console.log('Available Slots:', response.data);
      });
    }
  };

  const handleSlotSelect = (slot: any) => {
    setSelectedSlot(slot); // Set the clicked slot as selected
  };

  return (
    <div className="min-h-screen pt-20 pb-10 bg-gray-100">
      {/* Outer Wrapper */}
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-xl rounded-lg mt-">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Book a Facility</h1>

        {/* Date Picker */}
        <div className="mb-6">
          <label htmlFor="date" className="block text-lg font-medium text-gray-700 mb-2">Select Date</label>
          <input
            type="date"
            id="date"
            className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Check Availability Button */}
        <button
          onClick={handleCheckAvailability}
          className="mb-6 w-full py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
        >
          Check Availability
        </button>

        {/* Availability Display */}
        {error && (
          <div className="text-red-500 mb-6">Error: {error.message}</div>
        )}
        {data?.availableSlots && data.availableSlots.length > 0 ? (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Available Slots</h2>
            <ul className="space-y-2">
              {data.availableSlots.map((slot: any) => (
                <li
                  key={slot.startTime}
                  onClick={() => handleSlotSelect(slot)} // Handle slot click
                  className={`cursor-pointer text-gray-900 font-medium border border-gray-300 rounded-lg p-4 text-center 
                    ${selectedSlot?.startTime === slot.startTime ? 'bg-green-500 text-white' : 'bg-gray-50'}
                    hover:bg-indigo-200 transition duration-200`}
                >
                  {slot.startTime} - {slot.endTime}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="text-gray-500 mb-6">No available slots for the selected date.</div>
        )}

        {/* Booking Form */}
        <div className="mb-4">
          <label htmlFor="startTime" className="block text-lg font-medium text-gray-700 mb-2">Start Time</label>
          <input
            type="time"
            id="startTime"
            value={selectedSlot?.startTime || ''} // Pre-fill the selected start time
            readOnly
            className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-gray-100"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="endTime" className="block text-lg font-medium text-gray-700 mb-2">End Time</label>
          <input
            type="time"
            id="endTime"
            value={selectedSlot?.endTime || ''} // Pre-fill the selected end time
            readOnly
            className="block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 text-gray-800 bg-gray-100"
          />
        </div>

        {/* Book Now Button */}
        <button
          className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookNow;
