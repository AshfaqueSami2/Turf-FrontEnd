// import React, { useState } from "react";
// import { useGetFacilitiesQuery } from "../../redux/api/api";
// import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { TailSpin } from "react-loader-spinner";

// const FacilityListing: React.FC = () => {
//   const { data: facilities, error, isLoading } = useGetFacilitiesQuery(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [maxPrice, setMaxPrice] = useState<number | string>("");

//   // Display an error toast if there's an error fetching the data
//   if (error) {
//     toast.error("Error loading facilities.");
//   }

//   // Filter facilities based on search term and max price
//   const filteredFacilities = facilities?.data.filter((facility: any) => {
//     const matchesSearch =
//       facility.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       facility.location.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesPrice = maxPrice ? facility.pricePerHour <= maxPrice : true;
//     return matchesSearch && matchesPrice && !facility.isDeleted;
//   });

//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <div style={{marginTop:'52px'}} className="max-w-7xl mx-auto"> {/* Adjusted max width to a larger container */}
//         <div className="block mb-4 mx-auto border-b border-slate-300 pb-2 max-w-[360px]">
//           <ToastContainer />
//           <h1 className="text-2xl font-bold mb-6">Available Facilities</h1>

//           {/* Search and Filters */}
//           <div className="mb-6 flex justify-between items-center">
//             <input
//               type="text"
//               placeholder="Search by name or location"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="px-4 py-2 border rounded-md shadow-sm w-full max-w-xs"
//             />
//             <input
//               type="number"
//               placeholder="Max Price per Hour"
//               value={maxPrice}
//               onChange={(e) => setMaxPrice(e.target.value)}
//               className="ml-4 px-4 py-2 border rounded-md shadow-sm w-full max-w-xs"
//             />
//           </div>
//         </div>

//         {/* Facility Cards */}
//         {isLoading ? (
//           <div className="flex justify-center items-center h-64">
//             <TailSpin height="80" width="80" color="#4A90E2" ariaLabel="loading" />
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-10"> {/* Added gap-x-10 for horizontal space */}
//             {filteredFacilities.map((facility: any) => (
//               <div
//                 key={facility._id}
//                 className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105" 
//               >
//                 <div
//                   className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40"
//                 >
//                   <img
//                     src={facility.image}
//                     alt={facility.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
//                     {facility.name}
//                   </h5>
//                   <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
//                     Located in {facility.location}
//                   </p>
//                   <span className="font-bold text-lg text-gray-900 block mt-4">
//                     ${facility.pricePerHour} / hr
//                   </span>
//                 </div>
//                 <div className="p-6 pt-0">
//                   <Link
//                     to={`/viewFacilities/${facility._id}`}
//                     className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
//                     type="button"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FacilityListing;



import React, { useState } from "react";
import { useGetFacilitiesQuery } from "../../redux/api/api";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";

const FacilityListing: React.FC = () => {
  const { data: facilities, error, isLoading } = useGetFacilitiesQuery(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [minPrice, setMinPrice] = useState<string>(""); // Set as string
  const [maxPrice, setMaxPrice] = useState<string>(""); // Set as string

  const [filterValues, setFilterValues] = useState({
    searchTerm: "",
    minPrice: "",
    maxPrice: "",
  });

  // Display an error toast if there's an error fetching the data
  if (error) {
    toast.error("Error loading facilities.");
  }

  // Filter facilities based on search term, min price, and max price
  const filteredFacilities = facilities?.data.filter((facility: any) => {
    const matchesSearch =
      facility.name.toLowerCase().includes(filterValues.searchTerm.toLowerCase()) ||
      facility.location.toLowerCase().includes(filterValues.searchTerm.toLowerCase());

    const matchesMinPrice = filterValues.minPrice
      ? facility.pricePerHour >= +filterValues.minPrice
      : true; // Check min price

    const matchesMaxPrice = filterValues.maxPrice
      ? facility.pricePerHour <= +filterValues.maxPrice
      : true; // Check max price

    return matchesSearch && matchesMinPrice && matchesMaxPrice && !facility.isDeleted;
  });

  const handleSearch = () => {
    setFilterValues({
      searchTerm: searchTerm,
      minPrice: minPrice,
      maxPrice: maxPrice,
    });
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
  };

  const isNoResults = filteredFacilities?.length === 0;

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div style={{ marginTop: "52px" }} className="max-w-7xl mx-auto">
        <ToastContainer />

        {/* Facilities Count */}
        <div className="mb-6 flex justify-between items-center text-sm text-gray-700">
          <span>
            <strong>{filteredFacilities?.length}</strong> facilities are listed
          </span>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-6 p-4 rounded-lg shadow-sm border border-gray-300 flex items-center gap-4 bg-white">
          {/* Search Input */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Input search text"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                if (e.target.value === "") {
                  handleResetSearch(); // Automatically reset if search field is cleared
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
            <div className="flex items-center">
              <input
                type="text" // Changed from number to text to remove the increment/decrement buttons
                placeholder="Min Price"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                  if (e.target.value === "") {
                    handleResetSearch(); // Reset if input cleared
                  }
                }} // Update minPrice separately
                className="px-4 py-2 border border-gray-300 rounded-md w-24 text-center shadow-sm"
              />
            </div>
            <div className="flex items-center">
              <input
                type="text" // Changed from number to text to remove the increment/decrement buttons
                placeholder="Max Price"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                  if (e.target.value === "") {
                    handleResetSearch(); // Reset if input cleared
                  }
                }} // Update maxPrice separately
                className="px-4 py-2 border border-gray-300 rounded-md w-24 text-center shadow-sm"
              />
            </div>
            <button
              onClick={handleSearch} // Apply the filter when "Filter" button is clicked
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-10">
            {filteredFacilities.map((facility: any) => (
              <div
                key={facility._id}
                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105"
              >
                <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    {facility.name}
                  </h5>
                  <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    Located in {facility.location}
                  </p>
                  <span className="font-bold text-lg text-gray-900 block mt-4">
                    ${facility.pricePerHour} / hr
                  </span>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to={`/viewFacilities/${facility._id}`}
                    className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                    type="button"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FacilityListing;
