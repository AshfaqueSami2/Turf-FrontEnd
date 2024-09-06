// import  { useState } from "react";
// import { useCreateAdminMutation } from "../../redux/api/api";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";  // Import icons from react-icons

// const CreateAdmin = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const [createAdmin, { isLoading, isError, isSuccess }] = useCreateAdminMutation();

//   const handleCreateAdmin = async () => {
//     try {
//       await createAdmin({ name, email, password, phone, address }).unwrap();
//       alert("Admin created successfully!");
//       setName("");
//       setEmail("");
//       setPassword("");
//       setPhone("");
//       setAddress("");
//     } catch (error) {
//       console.error("Failed to create admin:", error);
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-6 text-gray-800">Create New Admin</h1>
//       <form className="space-y-4" onSubmit={e => { e.preventDefault(); handleCreateAdmin(); }}>
//         {[
//           { label: "Name", value: name, type: "text", onChange: setName },
//           { label: "Email", value: email, type: "email", onChange: setEmail },
//           { label: "Phone", value: phone, type: "text", onChange: setPhone },
//           { label: "Address", value: address, type: "text", onChange: setAddress },
//         ].map((field, index) => (
//           <div key={index}>
//             <label className="block text-sm font-medium text-gray-700">{field.label}</label>
//             <input
//               type={field.type}
//               value={field.value}
//               onChange={(e) => field.onChange(e.target.value)}
//               className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//             />
//           </div>
//         ))}
//         <div>
//           <label className="block text-sm font-medium text-gray-700">Password</label>
//           <div className="mt-1 relative rounded-md shadow-sm">
//             <input
//               type={passwordVisible ? "text" : "password"}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
//             />
//             <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
//               <button type="button" onClick={togglePasswordVisibility} className="text-gray-500 hover:text-gray-700">
//                 {passwordVisible ? <AiFillEyeInvisible className="h-5 w-5" /> : <AiFillEye className="h-5 w-5" />}
//               </button>
//             </div>
//           </div>
//         </div>
//         <button
//           type="submit"
//           className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//           disabled={isLoading}
//         >
//           {isLoading ? "Creating..." : "Create Admin"}
//         </button>
//         {isError && <p className="text-red-600 mt-2 text-center">Failed to create admin. Please try again.</p>}
//         {isSuccess && <p className="text-green-600 mt-2 text-center">Admin created successfully!</p>}
//       </form>
//     </div>
//   );
// };

// export default CreateAdmin;



import  { useState } from "react";
import { useCreateAdminMutation } from "../../redux/api/api";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai"; // Import icons for password visibility
import { ToastContainer, toast } from "react-toastify"; // Import toast
import 'react-toastify/dist/ReactToastify.css';

const CreateAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [createAdmin, { isLoading }] = useCreateAdminMutation();

  const handleCreateAdmin = async () => {
    try {
      await createAdmin({ name, email, password, phone, address }).unwrap();
      
      // Success toast with black background
      toast.success('Admin created successfully!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className: "bg-black text-white"
      });

      // Clear form fields
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setAddress("");
    } catch (error) {
      // Error toast with red background
      toast.error('Failed to create admin. Please try again.', {
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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full flex-col justify-start items-start gap-12 inline-flex">
          <h2 className="w-full text-center text-gray-900 text-4xl font-bold leading-normal">Create Admin</h2>
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
                    placeholder="Admin Name"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label htmlFor="email" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200"
                    placeholder="Admin Email"
                  />
                </div>
              </div>

              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label htmlFor="phone" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200"
                    placeholder="Phone Number"
                  />
                </div>
                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                  <label htmlFor="address" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200"
                    placeholder="Admin Address"
                  />
                </div>
              </div>

              <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                <label htmlFor="password" className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed">Password</label>
                <div className="relative w-full">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full focus:outline-none text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200"
                    placeholder="Password"
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    <button type="button" onClick={togglePasswordVisibility} className="text-gray-500 hover:text-gray-700">
                      {passwordVisible ? <AiFillEyeInvisible className="h-5 w-5" /> : <AiFillEye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full justify-start items-start gap-8 flex sm:flex-row flex-col">
                <button
                  onClick={handleCreateAdmin}
                  className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition-all duration-700 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] text-white text-lg font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? 'Creating...' : 'Create Admin'}
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

export default CreateAdmin;
