import React, { useState } from "react";
import { useCreateAdminMutation } from "../../redux/api/api";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";  // Import icons from react-icons

const CreateAdmin = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [createAdmin, { isLoading, isError, isSuccess }] = useCreateAdminMutation();

  const handleCreateAdmin = async () => {
    try {
      await createAdmin({ name, email, password, phone, address }).unwrap();
      alert("Admin created successfully!");
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setAddress("");
    } catch (error) {
      console.error("Failed to create admin:", error);
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Create New Admin</h1>
      <form className="space-y-4" onSubmit={e => { e.preventDefault(); handleCreateAdmin(); }}>
        {[
          { label: "Name", value: name, type: "text", onChange: setName },
          { label: "Email", value: email, type: "email", onChange: setEmail },
          { label: "Phone", value: phone, type: "text", onChange: setPhone },
          { label: "Address", value: address, type: "text", onChange: setAddress },
        ].map((field, index) => (
          <div key={index}>
            <label className="block text-sm font-medium text-gray-700">{field.label}</label>
            <input
              type={field.type}
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        ))}
        <div>
          <label className="block text-sm font-medium text-gray-700">Password</label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type={passwordVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 pr-10"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
              <button type="button" onClick={togglePasswordVisibility} className="text-gray-500 hover:text-gray-700">
                {passwordVisible ? <AiFillEyeInvisible className="h-5 w-5" /> : <AiFillEye className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          disabled={isLoading}
        >
          {isLoading ? "Creating..." : "Create Admin"}
        </button>
        {isError && <p className="text-red-600 mt-2 text-center">Failed to create admin. Please try again.</p>}
        {isSuccess && <p className="text-green-600 mt-2 text-center">Admin created successfully!</p>}
      </form>
    </div>
  );
};

export default CreateAdmin;
