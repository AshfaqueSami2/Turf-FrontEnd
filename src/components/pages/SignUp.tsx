// import React, { useState } from 'react';
// import { useSignUpMutation } from '../../redux/api/api';
// import { useNavigate } from 'react-router-dom';
// import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const SignUp: React.FC = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [address, setAddress] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [signUp, { isLoading }] = useSignUpMutation();
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     try {
//       const newUser = {
//         name,
//         email,
//         password,
//         phone,
//         address,
//         role: 'user', // Automatically setting the role to 'user'
//       };
//       await signUp(newUser).unwrap();

//       // Show success toast with react-toastify
//       toast.success('Sign up successful!', {
//         position: 'top-right',
//         autoClose: 1500,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });

//       // Clear form fields after successful signup
//       setName('');
//       setEmail('');
//       setPassword('');
//       setPhone('');
//       setAddress('');

//       // Delay navigation to login page for 1.5 seconds to show the toast
//       setTimeout(() => {
//         navigate('/login');
//       }, 1500);
//     } catch (err: unknown) {
//       if (err?.data?.message === 'Email already exists') {
//         toast.error('Email already exists. Please use a different email.', {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       } else if (err?.data?.message) {
//         toast.error(err.data.message, {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       } else {
//         toast.error('Sign up failed. Please try again.', {
//           position: 'top-right',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//         });
//       }
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex">
//         {/* Left Side - Sign Up Form */}
//         <div className="w-full md:w-1/2 p-8">
//           <h2 className="text-4xl font-bold text-gray-800 mb-6">Create an Account</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="shadow-sm rounded-md w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
//                 placeholder="Your Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="shadow-sm rounded-md w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
//                 placeholder="your@email.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
//                 Password
//               </label>
//               <div className="mt-1 relative rounded-md shadow-sm">
//                 <input
//                   type={passwordVisible ? 'text' : 'password'}
//                   id="password"
//                   className="shadow-sm rounded-md w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 pr-10"
//                   placeholder="Enter your password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
//                   <button
//                     type="button"
//                     onClick={togglePasswordVisibility}
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     {passwordVisible ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="phone"
//                 className="shadow-sm rounded-md w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
//                 placeholder="Your Phone Number"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 required
//               />
//             </div>
//             <div>
//               <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
//                 Address
//               </label>
//               <input
//                 type="text"
//                 id="address"
//                 className="shadow-sm rounded-md w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
//                 placeholder="Your Address"
//                 value={address}
//                 onChange={(e) => setAddress(e.target.value)}
//                 required
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={isLoading}
//               className="w-full py-3 mt-4 bg-purple-600 text-white font-semibold rounded-md shadow hover:bg-purple-700 transition duration-200"
//             >
//               {isLoading ? 'Signing Up...' : 'Sign Up'}
//             </button>
//           </form>
//         </div>

//         {/* Right Side - Illustration */}
//         <div className="hidden md:block md:w-1/2 bg-purple-600 relative">
//           <img
//             src="https://i.ibb.co/4ppsJ4C/original-ba68e98ea10e1867e831884c3b153387.png"
//             alt="Illustration"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default SignUp;



import React, { useState } from 'react';
import { useSignUpMutation } from '../../redux/api/api';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signUp, { isLoading }] = useSignUpMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const newUser = {
        name,
        email,
        password,
        phone,
        address,
        role: 'user', // Automatically setting the role to 'user'
      };
      await signUp(newUser).unwrap();
  
      toast.success('Sign up successful!', {
        position: 'top-right',
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
  
      // Clear form fields after successful signup
      setName('');
      setEmail('');
      setPassword('');
      setPhone('');
      setAddress('');
  
      // Delay navigation to login page for 1.5 seconds to show the toast
      setTimeout(() => {
        navigate('/login');
      }, 1500);
    } catch (err: unknown) {
      const error = err as any; // Type assertion to handle TypeScript error
  
      // Check if the error has errorSources array inside data
      if (error?.data?.errorSources && error.data.errorSources.length > 0) {
        toast.error(error.data.errorSources[0].message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error('Sign up failed. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl flex">
        {/* Left Side - Sign Up Form */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Create an Account</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm rounded-md w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm rounded-md w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <input
                  type={passwordVisible ? 'text' : 'password'}
                  id="password"
                  className="shadow-sm rounded-md w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 pr-10"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {passwordVisible ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow-sm rounded-md w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Address
              </label>
              <input
                type="text"
                id="address"
                className="shadow-sm rounded-md w-full px-4 py-2 border border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                placeholder="Your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 mt-4 bg-purple-600 text-white font-semibold rounded-md shadow hover:bg-purple-700 transition duration-200"
            >
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>
        </div>

        {/* Right Side - Illustration */}
        <div className="hidden md:block md:w-1/2 bg-purple-600 relative">
          <img
            src="https://i.ibb.co/4ppsJ4C/original-ba68e98ea10e1867e831884c3b153387.png"
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
