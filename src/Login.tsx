import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState<any>("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form
    //  data and submit to server
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 d-flex">
          <label
            className="block text-gray-700 font-semibold mb-2">
            Email
          <input
            type="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          </label>
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>
        <div className="mb-4 d-flex">
          <label
            className="block text-gray-700 font-semibold mb-2">
            password
          <input
            type="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-blue-500"
            value={password}
            onChange={(e) => setEmail(e.target.value)}
          />
           </label>
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>
        {/* Password field and other fields */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
