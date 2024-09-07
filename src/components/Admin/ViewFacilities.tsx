import { useState, useEffect } from 'react';
import { useGetFacilitiesQuery, useDeleteFacilityMutation } from '../../redux/api/api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

interface Facility {
  _id: string;
  name: string;
  image: string;
  description: string;
  pricePerHour: number;
}

const ViewFacilities = () => {
  const { data, error, isLoading, refetch } = useGetFacilitiesQuery(null);
  const [deleteFacility] = useDeleteFacilityMutation();
  const navigate = useNavigate();
  const [facilities, setFacilities] = useState<Facility[]>(data?.data || []);

  useEffect(() => {
    if (data?.data) {
      setFacilities(data.data);
    }
  }, [data]);

  const handleDelete = (facilityId: string) => {
    confirmAlert({
      title: 'Confirm to delete',
      message: 'Are you sure you want to delete this facility?',
      buttons: [
        {
          label: 'Yes',
          onClick: async () => {
            try {
              await deleteFacility(facilityId).unwrap();
              toast.success('Facility deleted successfully');
              
              // Update the local state to remove the deleted facility
              setFacilities(facilities.filter((facility) => facility._id !== facilityId));
              
              // Optionally, you can also refetch the facilities to keep the UI in sync
              refetch();
            } catch (error) {
              // Use a type guard to safely access error.message
              if (error && typeof error === 'object' && 'message' in error) {
                toast.error(`Error: ${(error as any).message}`);
              } else {
                toast.error('Failed to delete the facility.');
              }
            }
          },
        },
        {
          label: 'No',
        },
      ],
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;
  if (facilities.length === 0) return <div>No facilities available.</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <h1 className="text-2xl font-bold mb-4 text-center">All Facilities</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {facilities.map((facility: Facility) => (
          <div key={facility._id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="group relative">
              <img src={facility.image} alt={facility.name} className="w-full h-48 object-cover rounded-lg"/>
              <div className="absolute inset-0 flex justify-center items-center text-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 px-4 py-2">
                <div>
                  <h2 className="text-lg font-semibold text-white">{facility.name}</h2>
                  <p className="text-sm text-white">{facility.description}</p>
                  <p className="text-sm text-white"> ${facility.pricePerHour}/hr</p>
                  <button onClick={() => navigate(`/admin/update-facility/${facility._id}`, { state: facility })} className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow hover:shadow-md transition duration-300">Update Facility</button>
                  <button onClick={() => handleDelete(facility._id)} className="mt-4 ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg shadow hover:shadow-md transition duration-300">Delete Facility</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewFacilities;
