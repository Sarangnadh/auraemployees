"use client";
import React, { useEffect, useState } from "react";

const ProfilePage = () => {
  const [employees, setEmployees] = useState<
    Array<{
      name: string;
      email: string;
      mobile: string;
      designation: string;
      status: "active" | "inactive";
    }>
  >([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    designation: "",
    status: "active",
  });

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees") || "[]");
    setEmployees(storedEmployees);
  }, []);

  const handleDelete = (index: number) => {
    const updatedEmployees = [...employees];
    updatedEmployees.splice(index, 1);
    setEmployees(updatedEmployees);
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    alert("Employee deleted successfully!");
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setFormData(employees[index]);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedEmployees = [...employees];
      updatedEmployees[editIndex] = formData;
      setEmployees(updatedEmployees);
      localStorage.setItem("employees", JSON.stringify(updatedEmployees));
      alert("Profile updated successfully!");
      setEditIndex(null);
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Employee Profiles</h1>
      {employees.length === 0 ? (
        <p className="text-center text-gray-400">No employees found. Please register first.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {employees.map((employee, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg relative group"
            >
              <h2 className="text-2xl font-semibold">{employee.name}</h2>
              <p className="text-sm text-gray-400 mt-1">{employee.email}</p>
              <p className="text-sm text-gray-400 mt-1">Mobile: {employee.mobile}</p>
              <p className="text-sm text-gray-400 mt-1">Designation: {employee.designation}</p>
              <p
                className={`mt-4 inline-block px-3 py-1 rounded-full text-xs ${
                  employee.status === "active"
                    ? "bg-green-600 text-green-100"
                    : "bg-red-600 text-red-100"
                }`}
              >
                {employee.status.toUpperCase()}
              </p>
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-opacity"
                title="Delete Employee"
              >
                Delete My Profile
              </button>
              <button
                onClick={() => handleEdit(index)}
                className="mt-4 w-full px-4 py-2 text-sm bg-indigo-600 hover:bg-indigo-500 rounded-lg"
              >
                Edit My Profile
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Edit Profile Modal */}
      {editIndex !== null && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] md:w-[30rem]">
            <h2 className="text-2xl font-bold mb-4 text-center">Edit Profile</h2>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Name"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Email"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                required
              />
              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleFormChange}
                placeholder="Mobile"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                required
              />
              <input
                type="text"
                name="designation"
                value={formData.designation}
                onChange={handleFormChange}
                placeholder="Designation"
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                required
              />
              <select
                name="status"
                value={formData.status}
                onChange={handleFormChange}
                className="w-full px-4 py-2 rounded bg-gray-700 text-white"
                required
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </select>
              <button
                type="submit"
                className="w-full py-2 mt-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg"
              >
                Save Changes
              </button>
            </form>
            <button
              onClick={() => setEditIndex(null)}
              className="mt-4 w-full py-2 text-sm bg-gray-700 hover:bg-gray-600 rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
