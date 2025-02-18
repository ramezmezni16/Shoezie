import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    country: "",
    state: "",
    city: "",
    street: "",
    postalCode: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      localStorage.setItem("user", JSON.stringify(res.data));
      navigate("/");
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="country" placeholder="Country" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="state" placeholder="State" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="city" placeholder="City" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="street" placeholder="Street" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="postalCode" placeholder="Postal Code" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;