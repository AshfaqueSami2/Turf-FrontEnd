// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useGetFacilitiesQuery } from '../../redux/api/api';
// import { TailSpin } from 'react-loader-spinner';
// import { ToastContainer, toast } from 'react-toastify';
// import { FaTools, FaSmile, FaCouch, FaStar } from 'react-icons/fa';
// import 'react-toastify/dist/ReactToastify.css';

// const FacilityDetails: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   const { data: facilities, error, isLoading } = useGetFacilitiesQuery(null);
//   const [facility, setFacility] = useState<any>(null);

//   useEffect(() => {
//     if (facilities) {
//       const foundFacility = facilities.data.find((f: any) => f._id === id);
//       setFacility(foundFacility);
//     }
//   }, [facilities, id]);

//   if (error) {
//     toast.error('Error loading facility details.');
//   }

//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <TailSpin height="80" width="80" color="#D6BCFA" ariaLabel="loading" />
//       </div>
//     );
//   }

//   if (!facility) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <TailSpin height="80" width="80" color="#D6BCFA" ariaLabel="loading" />
//       </div>
//     );
//   }

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <ToastContainer />
//       <div className="flex flex-col lg:flex-row items-start bg-white p-8 rounded-xl shadow-lg space-y-6 lg:space-y-0 lg:space-x-6">
//         <div className="flex-1">
//           <img
//             src={facility.image}
//             alt={facility.name}
//             className="w-full h-auto object-cover rounded-xl shadow-md"
//           />
//         </div>
//         <div className="flex-1">
//           <div className="text-gray-800">
//             <h2 className="text-3xl font-semibold mb-4 text-purple-500">Facility Details</h2>
//             <div className="grid grid-cols-2 gap-4 mb-6 text-lg">
//               <div className="font-semibold text-gray-700">Location:</div>
//               <div className="text-gray-600">{facility.location}</div>
//               <div className="font-semibold text-gray-700">Price Per Hour:</div>
//               <div className="text-gray-600">${facility.pricePerHour} / hr</div>
//             </div>
//           </div>

//           <div className="text-gray-800">
//             <h2 className="text-2xl font-semibold mb-4 text-purple-500">About this Facility</h2>
//             <p className="mb-6 text-gray-700">{facility.description}</p>
//           </div>

//           <div className="flex justify-around text-gray-800 mb-6">
//             <div className="flex flex-col items-center text-purple-500">
//               <FaTools className="text-4xl mb-2" />
//               <span className="text-lg">Customizable</span>
//             </div>
//             <div className="flex flex-col items-center text-purple-500">
//               <FaSmile className="text-4xl mb-2" />
//               <span className="text-lg">Adaptable</span>
//             </div>
//             <div className="flex flex-col items-center text-purple-500">
//               <FaCouch className="text-4xl mb-2" />
//               <span className="text-lg">Comfortable</span>
//             </div>
//             <div className="flex flex-col items-center text-purple-500">
//               <FaStar className="text-4xl mb-2" />
//               <span className="text-lg">Fashionable</span>
//             </div>
//           </div>

//           <Link
//             to={`/book/${id}`}
//             className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300 text-center block"
//           >
//             Book Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FacilityDetails;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useGetFacilitiesQuery } from "../../redux/api/api";
import { TailSpin } from "react-loader-spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    toast.error("Error loading facility details.");
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
    <div>
      <section className="py-10 lg:py-24 relative">
        <div
          style={{ marginTop: "50px", marginBottom: "-40px" }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Facility Details Section */}
            <div className="pro-detail w-full flex flex-col justify-center order-last lg:order-none max-lg:max-w-[608px] max-lg:mx-auto">
              <p className="font-medium text-lg text-indigo-600 mb-4">
                Facility &nbsp; / &nbsp; {facility.category}
              </p>
              <h2 className="mb-2 font-manrope font-bold text-3xl leading-10 text-gray-900">
                {facility.name}
              </h2>
              <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                  ${facility.pricePerHour} / hr
                </h6>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {/* Star Ratings */}
                    <svg
                      width="20"
                      height="20"
                      fill="#FBBF24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z" />
                    </svg>
                    {/* Repeat for other stars */}
                  </div>
                  <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">
                    1624 reviews
                  </span>
                </div>
              </div>

              <p className="text-gray-500 text-base font-normal mb-8">
                {facility.description}
              </p>

              <div className="flex flex-col gap-4 text-gray-800 mb-6">
                <div className="flex justify-between">
                  <span className="font-semibold">Operating Hours:</span>
                  <span>{facility.operatingHours || "9 AM - 6 PM"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Location:</span>
                  <span>{facility.location}</span>
                </div>
              </div>

              <Link
                to={`/book/${id}`}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300 text-center block"
              >
                Book Now
              </Link>
            </div>

            {/* Facility Image Section */}
            <div>
              <div
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}
                className="swiper product-prev mb-6"
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      src={facility.image}
                      alt={facility.name}
                      className="mx-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src={facility.imageSecondary}
                      alt="Additional view"
                      className="mx-auto w-32 h-32 object-cover rounded-full shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* stats */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-gray-50 flex items-center justify-between flex-col gap-16 lg:flex-row">
            <div className="w-full lg:w-60">
              <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                Badminton Stats
              </h2>
              <p className="text-sm text-gray-500 leading-6 text-center lg:text-left">
                Experience the best facilities for your badminton training and
                competitions.
              </p>
            </div>
            <div className="w-full lg:w-4/5">
              <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
                <div className="block">
                  <div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left">
                    15+
                  </div>
                  <span className="text-gray-900 text-center block lg:text-left">
                    Badminton Courts
                  </span>
                </div>
                <div className="block">
                  <div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left">
                    500+
                  </div>
                  <span className="text-gray-900 text-center block lg:text-left">
                    Daily Players
                  </span>
                </div>
                <div className="block">
                  <div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left">
                    200+
                  </div>
                  <span className="text-gray-900 text-center block lg:text-left">
                    Tournaments Hosted
                  </span>
                </div>
                <div className="block">
                  <div className="font-manrope font-bold text-4xl text-indigo-600 mb-3 text-center lg:text-left">
                    50+
                  </div>
                  <span className="text-gray-900 text-center block lg:text-left">
                    Professional Coaches
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ToastContainer />
    </div>
  );
};

export default FacilityDetails;
