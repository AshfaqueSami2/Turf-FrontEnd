import React, { useEffect, useState } from "react";
import { useGetFacilitiesQuery } from "../../redux/api/api";

const FeaturedFacilities = () => {
  const { data, error, isLoading } = useGetFacilitiesQuery(null);
  const [featuredFacilities, setFeaturedFacilities] = useState([]);

  useEffect(() => {
    if (data && data.data) {
      // Select the first 6 facilities
      const facilities = data.data.slice(0, 6);
      setFeaturedFacilities(facilities);
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.toString()}</div>;
  }

  if (featuredFacilities.length === 0) {
    return <div>No facilities available.</div>;
  }

  return (
    <div className="p-6 mt-10 max-w-7xl mx-auto">
    <h1 className="text-2xl font-bold mb-4 text-center">Featured Facilities</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {featuredFacilities.map((facility: any) => (
        <div key={facility._id} className="relative group bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-500 hover:scale-105">
          <img
            src={facility.image}
            alt={facility.name}
            className="w-full h-56 object-cover group-hover:opacity-75 transition duration-500 ease-in-out"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
            <div className="text-center text-white px-4">
              <h2 className="text-lg font-semibold">{facility.name}</h2>
              <p className="text-sm">{facility.description}</p>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-black bg-opacity-75 text-white text-center text-lg font-bold">
            {facility.name}
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default FeaturedFacilities;
