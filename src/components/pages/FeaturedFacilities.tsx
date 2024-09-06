// export default FeaturedFacilities;
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useGetFacilitiesQuery } from "../../redux/api/api";

const FeaturedFacilities = () => {
  const { data, error, isLoading } = useGetFacilitiesQuery(null);
  const [featuredFacilities, setFeaturedFacilities] = useState([]);

//interface
interface Facility {
  _id: string;
  name: string;
  image: string;
  pricePerHour: number;
  oldPrice?: number; // Optional if some facilities do not have an old price
  status?: string;   // Optional if the status might be undefined
}

  useEffect(() => {
    if (data && data.data) {
      // Select the first 4 facilities
      const facilities = data.data.slice(0, 4);
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
    <div className="bg-[#F9FAFB] p-6 mt-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Featured Facilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
        {featuredFacilities.map((facility: Facility) => (
          <Link
            key={facility._id}
            to={`/viewFacilities/${facility._id}`} // Navigate to the facility details page
            className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl" // Added hover effect for shadow
          >
            <div className="relative">
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-60 object-cover"
              />
              <span
                className={`absolute top-3 right-3 px-3 py-1 text-sm font-semibold rounded-lg ${
                  facility.status === "Out of Stock"
                    ? "bg-red-500 text-white"
                    : "bg-green-500 text-white"
                }`}
              >
                {facility.status ? facility.status : "Available"}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{facility.name}</h3>
              <div className="flex justify-between items-center">
                <span className="text-gray-800 font-bold text-lg">${facility.pricePerHour}</span>
                {facility.oldPrice && (
                  <span className="text-gray-400 line-through text-sm ml-2">
                    ${facility.oldPrice}
                  </span>
                )}
              </div>
              {facility.status === "Available" && (
                <button className="bg-blue-600 text-white mt-4 w-full py-2 rounded-lg hover:bg-blue-700 transition">
                  Book Now
                </button>
              )}
            </div>
          </Link>
        ))}
      </div>

      {/* All Facilities Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/viewFacilities"
          className="bg-[#EFFCF3] text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-green-200 transition"
        >
          All Facilities
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFacilities;
