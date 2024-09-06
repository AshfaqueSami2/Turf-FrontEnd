
import React, { useState } from "react";
import { useGetFacilitiesQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";

const FacilityListing: React.FC = () => {
  const { data: facilities, error, isLoading } = useGetFacilitiesQuery(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<string>(""); 
  const [maxPrice, setMaxPrice] = useState<string>(""); 
  const [currentPage, setCurrentPage] = useState(1); 
  const facilitiesPerPage = 9; 

//interface
interface Facility {
  _id: string;
  name: string;
  location: string;
  pricePerHour: number;
  image: string;
  isDeleted?: boolean; // Optional property if some facilities are marked as deleted
}



  const [filterValues, setFilterValues] = useState({
    searchTerm: "",
    minPrice: "",
    maxPrice: "",
  });

  if (error) {
    toast.error("Error loading facilities.");
  }

  const filteredFacilities = facilities?.data.filter((facility: Facility) => {
    const matchesSearch =
      facility.name.toLowerCase().includes(filterValues.searchTerm.toLowerCase()) ||
      facility.location.toLowerCase().includes(filterValues.searchTerm.toLowerCase());

    const matchesMinPrice = filterValues.minPrice
      ? facility.pricePerHour >= +filterValues.minPrice
      : true; 

    const matchesMaxPrice = filterValues.maxPrice
      ? facility.pricePerHour <= +filterValues.maxPrice
      : true; 

    return matchesSearch && matchesMinPrice && matchesMaxPrice && !facility.isDeleted;
  });

  const totalPages = Math.ceil(filteredFacilities?.length / facilitiesPerPage);
  const startIndex = (currentPage - 1) * facilitiesPerPage;
  const endIndex = startIndex + facilitiesPerPage;
  const currentFacilities = filteredFacilities?.slice(startIndex, endIndex);

  const handleSearch = () => {
    setFilterValues({
      searchTerm: searchTerm,
      minPrice: minPrice,
      maxPrice: maxPrice,
    });
    setCurrentPage(1);
  };

  const handleResetSearch = () => {
    setFilterValues({
      searchTerm: "",
      minPrice: "",
      maxPrice: "",
    });
    setSearchTerm("");
    setMinPrice("");
    setMaxPrice("");
    setCurrentPage(1);
  };

  const isNoResults = filteredFacilities?.length === 0;

  return (
    <div style={{marginTop:'80px'}} className="min-h-screen flex justify-center items-center py-10 md:py-16">
      <div className="w-full max-w-7xl px-4 md:px-6">
        <ToastContainer />
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">All Facilities</h1>
          <p className="text-base md:text-lg text-gray-600">Browse and explore available facilities</p>
        </div>

        {/* Facilities Count */}
        <div className="mb-6 flex justify-between items-center text-sm md:text-base text-gray-700">
          <span>
            <strong>{filteredFacilities?.length}</strong> facilities are listed
          </span>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6 p-4 rounded-lg shadow-sm border border-gray-300 bg-white flex flex-col sm:flex-row gap-4">
          {/* Search Input */}
          <div className="flex-1 flex items-center border border-gray-300 rounded-md overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Search facilities..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (e.target.value === "") {
                  handleResetSearch(); 
                }
              }}
              className="px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button
              onClick={handleSearch}
              className="bg-blue-500 text-white px-4 py-2"
            >
              Search
            </button>
          </div>

          {/* Min and Max Price Filters */}
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Min Price"
              value={minPrice}
              onChange={(e) => {
                setMinPrice(e.target.value);
                if (e.target.value === "") {
                  handleResetSearch(); 
                }
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-center w-full sm:w-24"
            />
            <input
              type="text"
              placeholder="Max Price"
              value={maxPrice}
              onChange={(e) => {
                setMaxPrice(e.target.value);
                if (e.target.value === "") {
                  handleResetSearch(); 
                }
              }}
              className="px-4 py-2 border border-gray-300 rounded-md text-center w-full sm:w-24"
            />
            <button
              onClick={handleSearch}
              className="bg-gray-800 text-white px-4 py-2 rounded-md shadow-sm"
            >
              Filter
            </button>
          </div>
        </div>

        {/* Error Message if No Results */}
        {isNoResults && (
          <div className="text-center text-red-500 font-semibold">
            No facilities found. Try changing the filters.
          </div>
        )}

        {/* Facility Cards */}
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <TailSpin height="80" width="80" color="#4A90E2" ariaLabel="loading" />
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {currentFacilities.map((facility: Facility) => (
                <div
                  key={facility._id}
                  className="relative flex flex-col bg-white shadow-md rounded-xl p-4 transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative h-40 md:h-56 rounded-xl overflow-hidden">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-4">
                    <h5 className="text-xl font-semibold text-gray-900">{facility.name}</h5>
                    <p className="text-sm text-gray-600 mt-1">Located in {facility.location}</p>
                    <span className="text-lg font-bold text-gray-900 mt-2 block">
                      ${facility.pricePerHour} / hr
                    </span>
                  </div>
                  <div className="mt-4">
                    <Link
                      to={`/viewFacilities/${facility._id}`}
                      className="block w-full text-center bg-gray-900 text-white py-2 rounded-lg transition hover:bg-gray-700"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 mt-6">
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 text-sm bg-white text-gray-600 border rounded-lg hover:bg-gray-100"
              >
                Back
              </button>

              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index + 1)}
                  className={`px-3 py-1 text-sm border rounded-lg ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 text-sm bg-white text-gray-600 border rounded-lg hover:bg-gray-100"
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacilityListing;


