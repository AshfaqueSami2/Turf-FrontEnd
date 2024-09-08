import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center bg-white p-8 rounded shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Unauthorized Access</h1>
        <p className="text-lg text-gray-700 mb-6">
          You do not have permission to view this page. Please contact an administrator if you believe this is an error.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Go to Home
          </Link>
          <Link to="/login" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
