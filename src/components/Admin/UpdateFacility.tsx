import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useUpdateFacilityMutation } from '../../redux/api/api';

const UpdateFacility = () => {
  const { id } = useParams<{ id: string }>(); // Get facility ID from URL
  const location = useLocation(); // Correctly initialize the location variable
  const navigate = useNavigate();

  // State for facility details
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    pricePerHour: '',
    location: '' // Note that this field name might conflict with useLocation; you may want to rename it, e.g., `facilityLocation`.
  });

  const [updateFacility, { isLoading, isError, isSuccess }] = useUpdateFacilityMutation();

  // UseEffect to pre-fill form with facility data
  useEffect(() => {
    if (location.state) {
      const { name, description, pricePerHour, location: facilityLocation } = location.state;
      setFormData({
        name,
        description,
        pricePerHour: pricePerHour.toString(),
        location: facilityLocation
      });
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      const updatedData = { ...formData, pricePerHour: parseFloat(formData.pricePerHour) };
      await updateFacility({ id, facility: updatedData }).unwrap();
      alert('Facility updated successfully!');
      navigate('/admin/dashboard'); // Redirect to admin dashboard or wherever appropriate
    } catch (error) {
      console.error('Failed to update facility:', error);
      alert('Failed to update facility. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Update Facility</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          disabled
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price Per Hour</label>
        <input
          type="number"
          name="pricePerHour"
          value={formData.pricePerHour}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleUpdate}
        className="bg-blue-600 text-white p-2 rounded-md"
        disabled={isLoading}
      >
        {isLoading ? 'Updating...' : 'Update Facility'}
      </button>
      {isError && <p className="text-red-600 mt-2">Failed to update facility. Please try again.</p>}
      {isSuccess && <p className="text-green-600 mt-2">Facility updated successfully!</p>}
    </div>
  );
};

export default UpdateFacility;
