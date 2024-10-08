import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useUpdateFacilityMutation } from '../../redux/api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateFacility = () => {
  const { id } = useParams<{ id: string }>(); // Get facility ID from URL
  const location = useLocation(); // Correctly initialize the location variable
  const navigate = useNavigate();

  // State for facility details
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    pricePerHour: '',
    location: '', // Avoid naming conflict with useLocation hook
  });

  const [updateFacility, { isLoading }] = useUpdateFacilityMutation();

  // UseEffect to pre-fill form with facility data
  useEffect(() => {
    if (location.state) {
      const { name, description, pricePerHour, location: facilityLocation } = location.state;
      setFormData({
        name,
        description,
        pricePerHour: pricePerHour.toString(),
        location: facilityLocation,
      });
    }
  }, [location.state]);

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const updatedData = { ...formData, pricePerHour: parseFloat(formData.pricePerHour) };
      await updateFacility({ id, facility: updatedData }).unwrap();

      // Success toast with green color
      toast.success('Facility updated successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-green-500 text-white text-lg font-semibold",
      });

      // Redirect after success
      setTimeout(() => {
        navigate('/admin/dashboard');
      }, 3000); // 3 seconds delay before redirecting
    } catch (error) {
      console.error('Failed to update facility:', error);

      // Error toast with red color
      toast.error('Failed to update facility. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-red-500 text-white text-lg font-semibold",
      });
    }
  };

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-normal">Update Facility</h2>
          <div className="w-full lg:p-11 md:p-8 p-7 bg-white rounded-3xl shadow-[0px_15px_60px_-4px_rgba(16,_24,_40,_0.08)] flex-col justify-start items-start flex">
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label htmlFor="name" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200"
                    placeholder="Facility Name"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label htmlFor="price" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Price Per Hour</label>
                  <input
                    type="number"
                    id="price"
                    name="pricePerHour"
                    value={formData.pricePerHour}
                    onChange={handleChange}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200"
                    placeholder="Price per Hour"
                  />
                </div>
              </div>

              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label htmlFor="description" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200"
                    placeholder="Facility Description"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label htmlFor="location" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Location</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200"
                    placeholder="Facility Location"
                  />
                </div>
              </div>

              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <button
                  onClick={handleUpdate}
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-white text-lg font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? 'Updating...' : 'Update Facility'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer />
    </section>
  );
};

export default UpdateFacility;
