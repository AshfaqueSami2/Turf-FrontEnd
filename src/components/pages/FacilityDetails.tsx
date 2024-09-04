import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useGetFacilitiesQuery } from '../../redux/api/api';
import { TailSpin } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import { FaTools, FaSmile, FaCouch, FaStar } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';

const FacilityDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: facilities, error, isLoading } = useGetFacilitiesQuery(null);
  const [facility, setFacility] = useState<any>(null);

  useEffect(() => {
    if (facilities) {
      const foundFacility = facilities.data.find((f: any) => f._id === id);
      setFacility(foundFacility);
    }
  }, [facilities, id]);

  if (error) {
    toast.error('Error loading facility details.');
  }

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <TailSpin height="80" width="80" color="#D6BCFA" ariaLabel="loading" />
      </div>
    );
  }

  if (!facility) {
    return (
      <div className="flex justify-center items-center h-64">
        <TailSpin height="80" width="80" color="#D6BCFA" ariaLabel="loading" />
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <ToastContainer />
      <div className="flex flex-col lg:flex-row items-start bg-white p-8 rounded-xl shadow-lg space-y-6 lg:space-y-0 lg:space-x-6">
        <div className="flex-1">
          <img
            src={facility.image}
            alt={facility.name}
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>
        <div className="flex-1">
          <div className="text-gray-800">
            <h2 className="text-3xl font-semibold mb-4 text-purple-500">Facility Details</h2>
            <div className="grid grid-cols-2 gap-4 mb-6 text-lg">
              <div className="font-semibold text-gray-700">Location:</div>
              <div className="text-gray-600">{facility.location}</div>
              <div className="font-semibold text-gray-700">Price Per Hour:</div>
              <div className="text-gray-600">${facility.pricePerHour} / hr</div>
            </div>
          </div>

          <div className="text-gray-800">
            <h2 className="text-2xl font-semibold mb-4 text-purple-500">About this Facility</h2>
            <p className="mb-6 text-gray-700">{facility.description}</p>
          </div>

          <div className="flex justify-around text-gray-800 mb-6">
            <div className="flex flex-col items-center text-purple-500">
              <FaTools className="text-4xl mb-2" />
              <span className="text-lg">Customizable</span>
            </div>
            <div className="flex flex-col items-center text-purple-500">
              <FaSmile className="text-4xl mb-2" />
              <span className="text-lg">Adaptable</span>
            </div>
            <div className="flex flex-col items-center text-purple-500">
              <FaCouch className="text-4xl mb-2" />
              <span className="text-lg">Comfortable</span>
            </div>
            <div className="flex flex-col items-center text-purple-500">
              <FaStar className="text-4xl mb-2" />
              <span className="text-lg">Fashionable</span>
            </div>
          </div>

          <Link
            to={`/book/${id}`}
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300 text-center block"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacilityDetails;
