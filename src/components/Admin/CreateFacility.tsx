import { useState } from 'react';
import { useCreateFacilityMutation } from '../../redux/api/api';

const CreateFacility = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [pricePerHour, setPricePerHour] = useState(0);
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');  // Add state for image URL

  const [createFacility, { isLoading, isError, isSuccess }] = useCreateFacilityMutation();

  const handleCreateFacility = async () => {
    try {
      await createFacility({ name, description, pricePerHour, location, image }).unwrap();
      // Handle success (e.g., show a success message, redirect)
      alert('Facility created successfully!');
    } catch (error) {
      // Handle error (e.g., show an error message)
      console.error('Failed to create facility:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Create Facility</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price Per Hour</label>
        <input
          type="number"
          value={pricePerHour}
          onChange={(e) => setPricePerHour(Number(e.target.value))}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Image URL</label> {/* Add a label for the image URL input */}
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleCreateFacility}
        className="bg-blue-600 text-white p-2 rounded-md"
        disabled={isLoading}
      >
        {isLoading ? 'Creating...' : 'Create Facility'}
      </button>
      {isError && <p className="text-red-600 mt-2">Failed to create facility. Please try again.</p>}
      {isSuccess && <p className="text-green-600 mt-2">Facility created successfully!</p>}
    </div>
  );
};

export default CreateFacility;
