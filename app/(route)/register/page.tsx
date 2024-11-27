"use client";
import React, { useState } from "react";
import Link from "next/link";
import { SparklesCore } from "../../components/ui/sparkles";

const page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [designation, setDesignation] = useState("");
  const [status, setStatus] = useState("active");
  const [error, setError] = useState<string | null>(null); // Allow string or null
  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  const handleSignUp = async (e:any) => {
    e.preventDefault();
    if(!name){
      setError("Please Enter your Name");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!mobile) {
      setError("Please enter your mobile number.");
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      return;
    }
    if (!designation) {
      setError("Please select your designation");
      return;
    }

    setError(null);
    const employee = {
      name,
      email,
      mobile,
      password,
      designation,
      status,
    };
  
    // Retrieve existing data from local storage
    const existingEmployees = JSON.parse(localStorage.getItem("employees") || "[]");
  
    // Add new employee
    existingEmployees.push(employee);
  
    // Save updated data back to local storage
    localStorage.setItem("employees", JSON.stringify(existingEmployees));
  
    alert("Employee registered successfully!");
    
    // Clear form fields
    setName("");
    setEmail("");
    setMobile("");
    setPassword("");
    setDesignation("");
    setStatus("active");
  }

  return (
    <div className="w-full h-screen relative flex items-center justify-center bg-gray-900 text-white">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 w-full h-full"
        particleColor="#FFFFFF"
      />
      <div className="relative z-10 w-[450px] p-8 bg-black/70 backdrop-blur-lg rounded-xl shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Create an Account
        </h2>
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleSignUp} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className="w-full px-4 py-2 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="" disabled>
              Select Designation
            </option>
            <option value="Developer">Developer</option>
            <option value="Designer">Designer</option>
            <option value="Manager">Manager</option>
            <option value="Teacher">Teacher</option>
            <option value="other">Other</option>
          </select>
          <div className="flex items-center space-x-4">
            <label className="text-sm text-gray-400">Status:</label>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value="active"
                checked={status === "active"}
                onChange={() => setStatus("active")}
                className="text-indigo-500 focus:ring-indigo-500"
              />
              <label className="text-sm text-gray-400">Active</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value="inactive"
                checked={status === "inactive"}
                onChange={() => setStatus("inactive")}
                className="text-indigo-500 focus:ring-indigo-500"
              />
              <label className="text-sm text-gray-400">Inactive</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-white font-medium transition"
          >
            Register
          </button>
          <p className="text-center text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-400 hover:underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default page;
