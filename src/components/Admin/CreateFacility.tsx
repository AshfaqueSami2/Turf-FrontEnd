import { useState } from 'react';
import { useCreateFacilityMutation } from '../../redux/api/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateFacility = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pricePerHour, setPricePerHour] = useState(0);
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');

  const [createFacility, { isLoading }] = useCreateFacilityMutation();

  const handleCreateFacility = async () => {
    try {
      await createFacility({ name, description, pricePerHour, location, image }).unwrap();

      // Success toast with black background
      toast.success('Facility created successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-black text-white"
      });

      // Reset form fields
      setName('');
      setDescription('');
      setPricePerHour(0);
      setLocation('');
      setImage('');

    } catch (error) {
      // Error toast
      toast.error('Failed to create facility. Please try again.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-red-500 text-white"
      });
    }
  };

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-normal">Create Facility</h2>
          <div className="w-full lg:p-11 md:p-8 p-7 bg-white rounded-3xl shadow-[0px_15px_60px_-4px_rgba(16,_24,_40,_0.08)] flex-col justify-start items-start flex">
            <div className="w-full flex-col justify-start items-start gap-8 flex">
              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label htmlFor="name" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200"
                    placeholder="Facility Name"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label htmlFor="price" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Price Per Hour</label>
                  <input
                    type="number"
                    id="price"
                    value={pricePerHour}
                    onChange={(e) => setPricePerHour(Number(e.target.value))}
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
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200"
                    placeholder="Facility Description"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label htmlFor="location" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Location</label>
                  <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200"
                    placeholder="Facility Location"
                  />
                </div>
              </div>

              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label htmlFor="image" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Image URL</label>
                  <input
                    type="text"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200"
                    placeholder="Image URL"
                  />
                </div>
              </div>

              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <button
                  onClick={handleCreateFacility}
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-white text-lg font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating...' : 'Create Facility'}
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

export default CreateFacility;
