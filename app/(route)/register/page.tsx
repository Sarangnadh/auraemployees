"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import Link from "next/link";
import { SparklesCore } from "../../components/ui/sparkles";

const Page = () => {
  const router = useRouter(); // Initialize useRouter

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mobile, setMobile] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [designation, setDesignation] = useState<string>("");
  const [status, setStatus] = useState<"Active" | "Inactive">("Active");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);
  const validateMobile = (mobile: string): boolean => /^\d{10}$/.test(mobile);

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!name) {
      setError("Please enter your name.");
      setLoading(false);
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }
    if (!validateMobile(mobile)) {
      setError("Please enter a valid 10-digit mobile number.");
      setLoading(false);
      return;
    }
    if (!password) {
      setError("Please enter your password.");
      setLoading(false);
      return;
    }
    if (!designation) {
      setError("Please select your designation.");
      setLoading(false);
      return;
    }

    // Check if email already exists
    const existingEmployees: Array<typeof employee> = JSON.parse(localStorage.getItem("employees") || "[]");
    const emailExists = existingEmployees.some((emp) => emp.email === email);
    if (emailExists) {
      setError("Email is already registered.");
      setLoading(false);
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

    // Add new employee
    existingEmployees.push(employee);
    localStorage.setItem("employees", JSON.stringify(existingEmployees));

    alert("Employee registered successfully!");

    // Clear form fields
    setName("");
    setEmail("");
    setMobile("");
    setPassword("");
    setDesignation("");
    setStatus("Active");
    setLoading(false);

    // Redirect to the livestatus page
    router.push("/livestatus");
  };

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
        <h2 className="text-3xl font-semibold text-center mb-6">Create an Account</h2>
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
            <option value="" disabled>Select Designation</option>
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
                value="Active"
                checked={status === "Active"}
                onChange={() => setStatus("Active")}
                className="text-indigo-500 focus:ring-indigo-500"
              />
              <label className="text-sm text-gray-400">Active</label>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                value="Inactive"
                checked={status === "Inactive"}
                onChange={() => setStatus("Inactive")}
                className="text-indigo-500 focus:ring-indigo-500"
              />
              <label className="text-sm text-gray-400">Inactive</label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 hover:bg-indigo-500 rounded-md text-white font-medium transition"
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
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

export default Page;
