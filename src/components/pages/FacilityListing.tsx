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
//     <div className="container mx-auto p-6">
//       <ToastContainer />
//       <h1 className="text-2xl font-bold mb-6">Available Facilities</h1>

//       {/* Search and Filters */}
//       <div className="mb-6 flex justify-between items-center">
//         <input
//           type="text"
//           placeholder="Search by name or location"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="px-4 py-2 border rounded-md shadow-sm w-full max-w-xs"
//         />
//         <input
//           type="number"
//           placeholder="Max Price per Hour"
//           value={maxPrice}
//           onChange={(e) => setMaxPrice(e.target.value)}
//           className="ml-4 px-4 py-2 border rounded-md shadow-sm w-full max-w-xs"
//         />
//       </div>

//       {/* Facility Cards */}
//       {isLoading ? (
//         <div className="flex justify-center items-center h-64">
//           <TailSpin
//             height="80"
//             width="80"
//             color="#4A90E2"
//             ariaLabel="loading"
//           />
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredFacilities.map((facility: any) => (
//             <div
//               key={facility._id}
//               className="bg-white rounded-lg overflow-hidden shadow-lg max-w-sm"
//             >
//               <div className="relative">
//                 <img
//                   className="w-full h-48 object-cover"
//                   src={facility.image}
//                   alt={facility.name}
//                 />
//                 <div className="absolute top-0 right-0 bg-purple-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
//                   {facility.isOnSale ? "SALE" : ""}
//                 </div>
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-medium mb-2">{facility.name}</h3>
//                 <p className="text-gray-600 text-sm mb-4">
//                   Located in {facility.location}
//                 </p>
//                 <div className="flex items-center justify-between">
//                   <span className="font-bold text-lg">
//                     ${facility.pricePerHour} / hr
//                   </span>
//                   <Link
//                     to={`/viewFacilities/${facility._id}`}
//                     className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded"
//                   >
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FacilityListing;



import React from "react";
import { FaStar } from "react-icons/fa"; // For the star icon

const FacilityListing = () => {
  const products = [
    {
      id: 1,
      name: "Trendy Whites",
      price: "$74.99",
      delivery: "$10",
      image: "https://via.placeholder.com/300", // Replace with your image URL
      rating: 4.8,
      reviews: "2.4K",
    },
    {
      id: 2,
      name: "Trendy Whites",
      price: "$25",
      delivery: "$10",
      image: "https://via.placeholder.com/300", // Replace with your image URL
      rating: 4.8,
      reviews: "2.4K",
    },
    {
      id: 3,
      name: "Trendy Whites",
      price: "$150",
      delivery: "$10",
      image: "https://via.placeholder.com/300", // Replace with your image URL
      rating: 4.8,
      reviews: "2.4K",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-900">{product.name}</h3>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xl font-bold text-gray-900">{product.price}</span>
                <span className="text-sm text-gray-500">Delivery {product.delivery}</span>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center space-x-1">
                  <FaStar className="text-yellow-500" />
                  <span className="text-sm text-gray-700 font-medium">{product.rating}</span>
                </div>
                <span className="text-sm text-gray-500">{product.reviews} reviews</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacilityListing;
